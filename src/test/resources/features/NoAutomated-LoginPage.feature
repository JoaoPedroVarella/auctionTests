Feature: Teste na tela de login
    Scenario: Entrada de usuario correto
      Given Que acesso o site
      When Digito meu usuario "JoaoPedroVarella"
      And Digito a minha senha "123456"
      And Clico no botão de Login
      Then Entro no site

    Scenario Outline: Entrada de dados incorretos no login
      Given Que acesso o site
      When Faco login com "<nome>" e "<senha>"
      Then Verifico o retorno do erro

      Examples:
      | nome               | senha  |
      | JoaoPedro          | 123456 |
      | Joao Pedro Varella | 123456 |
      | JoaoPedroVarella   | 12345  |

  Scenario: Entrada de usuario somente com nome
    Given Que acesso o site
    When Digito meu usuario "JoaoPedroVarella"
    Then Verifico botao de login não está clicavel

  Scenario: Entrada de usuario somente com senha
    Given Que acesso o site
    When Digito a minha senha "123456"
    Then Verifico botao de login não está clicavel

  Scenario: Login e LogOut de usuário
    Given Que acesso o site
    When Faco login com "JoaoPedroVarella" e "123456"
    And Entro no site
    And Clico em Sign Out
    Then Verifico se voltei a tela de login


