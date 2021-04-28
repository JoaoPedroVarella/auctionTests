Feature: Teste na tela de cadastro
  @SequentialTest
  Scenario: Entrada de usuario correto
    Given Que acesso o site
    When Clico em sign Up
    And Digito o campo name "Jhon Peter"
    And Digito o campo username "JhonPeter"
    And Digito o campo password "123456"
    And Digito o campo email "jpvarella09@gmail.com"
    And Digito o campo cpf "36637938858"
    And Clico no botão de Sign Up
    Then Entro no site

  @SequentialTest
  Scenario: Entrada de usuario já cadastrado
    Given Que acesso o site
    When Clico em sign Up
    And Faco o cadastro no campo name "Jhon Peter", username "JhonPeter", password "123456", email "jpvarella09@gmail.com", cpf "36637938858"
    Then Verifico mensagem de erro "Erro ao criar o usuário."

  Scenario Outline: Verificar cadastro de usuário já deletado
    Given Que acesso o site
    When Crio o usuario para os testes com os dados "<name>", "<username>", "<password>", "<email>", "<cpf>"
    And Crio usuario
    And Entro no site, clico em desativar usuario e volto para a tela de login
    And Crio o usuario para os testes com os dados "<name>", "<username>", "<password>", "<email>", "<cpf>"
    And Crio usuario
    Then Verifico o erro de usuario foi desativado
    Examples:
      | name       | username | password | email                  | cpf         |
      | Joao Pedro | JoaoPV   | 123456   | jpvarella09@gmail.com  | 36637938858 |

  Scenario: Entrada de usuario com cpf inválido
    Given Que acesso o site
    When Crio o usuario para os testes com os dados "Joao Pedro", "NaoCadastrado", "123456", "noregister@google.com", "11111111111"
    And Crio usuario
    Then Verifico botao de Sign Up não está clicavel