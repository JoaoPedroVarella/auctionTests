Feature: Criar usuarios para testes
  Scenario: Cadastrado de usuário adm para testes
    Given Que acesso o site
    When Crio o usuario para os testes com os dados "Joao Pedro Varella", "JoaoPedroVarella", "123456", "jpvarella09@gmail.com", "36637938858"
    And Seleciono campo ADM
    Then Crio usuario

  Scenario: Cadastrado de usuário não adm para testes
    Given Que acesso o site
    When Crio o usuario para os testes com os dados "NoAdm", "NoAdm", "123456", "noadm@totvs.com", "36637938858"
    Then Crio usuario