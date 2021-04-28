Feature: Leilao automatizado
  Scenario: Criando um leilao com produto usado
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Valid Auction" e valor inicial "150" para o leilao
    And Clico para dizer que o produto usado
    And Clico em sign up
    Then Verifico o leilao com "Valid Auction", "Joao Pedro Varella", "150" e se campo de usado esta setado com "Yes".

  Scenario: Criar leilao com usuario no ADM
    Given Que acesso o site
    When Faco login com "NoAdm" e "123456"
    Then Verifico a ausencia do botao Create Auction

  Scenario: Finalizando um leilao
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Delete Auction" e valor inicial "180" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Clico em end auction
    Then Verifico que leilao foi finalizado

  Scenario: Fazer um bid em um leilao aberto com valor menor que preco inicial
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Test Value" e valor inicial "50" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Digito um valor no campo bid "15" e clico em bid
    Then Verifico mensagem de erro sobre bid invalido

  Scenario: Fazer um bid valido em um leilao aberto
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Valid Value" e valor inicial "150" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Digito um valor no campo bid "160" e clico em bid
    Then Verifico inclusao valor correto "160"


