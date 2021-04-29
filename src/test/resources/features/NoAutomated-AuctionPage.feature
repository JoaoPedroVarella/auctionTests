Feature: Teste na tela de Leilao
  Scenario: Criando um leilao com produto não usado
    Given Que acesso o site
    When Faco login com "nome" e "senha"
    And Clico no campo Create Auction
    And Digito um nome "AuctionName" e valor inicial "20" para o leilao
    And Clico em sign up
    Then Verifico o leilao com "AuctionName", "UserName", "20" e se campo de usado esta setado com "No".

  Scenario: Criar um leilao com valor inicial negativo
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Digito um nome "Negative Value" e valor inicial "-25" para o leilao
    And Clico em sign up
    Then Verifico mensagem de erro sobre valor inicial negativo

  Scenario: Fazer um bid com valor negativo em um leilao
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Digito um nome "Negative Value" e valor inicial "150" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Digito um valor no campo bid "-25" e clico em bid
    Then Verifico mensagem de erro sobre bid invalido

  Scenario: Verificando se leilao finalizado contem as datas corretas
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Dates" e valor inicial "80" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Clico em end auction
    Then Verifico que se opening date é menor ou igual que ending date

  Scenario: Fazer um bid válido em leilao aberto com uma conta diferente da que criou o leilao
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Valid Value" e valor inicial "80" para o leilao
    And Clico em sign up
    And Faco LogOut
    And Faco login com "NoAdm" e "123456"
    And Clico no leilao criado
    And Digito um valor no campo bid "90" e clico em bid
    Then Verifico que valor foi incluso com sucesso

  Scenario: Fazer um lance em um leilao finalizado
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Seleciono um leilao finalizado
    Then Verifico que leilao foi finalizado nao e possivel dar um lance

  Scenario: Fazer um bid em um leilao com valor menor que ultimo bid
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Invalid Value" e valor inicial "100" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Digito um valor no campo bid "140" e clico em bid
    And Digito um valor no campo bid "120" e clico em bid
    Then Verifico que valor nao foi adicionado

  Scenario: Finalizar um leilao com bids
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Clico no campo Create Auction
    And Digito um nome "Delete Auction" e valor inicial "150" para o leilao
    And Clico em sign up
    And Clico no leilao criado
    And Digito um valor no campo bid "160" e clico em bid
    And Digito um valor no campo bid "170" e clico em bid
    And Digito um valor no campo bid "180" e clico em bid
    And Clico em end auction
    Then Verifico que valores foram incluidos com sucesso e leilao finalizado