$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Automated.feature");
formatter.feature({
  "line": 1,
  "name": "Leilao automatizado",
  "description": "",
  "id": "leilao-automatizado",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3271354300,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Criando um leilao com produto usado",
  "description": "",
  "id": "leilao-automatizado;criando-um-leilao-com-produto-usado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Digito um nome \"Valid Auction\" e valor inicial \"150\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Clico para dizer que o produto usado",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verifico o leilao com \"Valid Auction\", \"Joao Pedro Varella\", \"150\" e se campo de usado esta setado com \"Yes\".",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1761403800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JoaoPedroVarella",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "Leilao.facoLoginComE(String,String)"
});
formatter.result({
  "duration": 2296463800,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 210965000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid Auction",
      "offset": 16
    },
    {
      "val": "150",
      "offset": 48
    }
  ],
  "location": "Leilao.digitoUmNomeEValorInicialParaOLeilao(String,String)"
});
formatter.result({
  "duration": 221413500,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoParaDizerQueOProdutoUsado()"
});
formatter.result({
  "duration": 63437800,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 85802500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid Auction",
      "offset": 23
    },
    {
      "val": "Joao Pedro Varella",
      "offset": 40
    },
    {
      "val": "150",
      "offset": 62
    },
    {
      "val": "Yes",
      "offset": 104
    }
  ],
  "location": "Leilao.verificoOLeilaoComESeCampoDeUsadoEstaSetado(String,String,String,String)"
});
formatter.result({
  "duration": 1010108100,
  "status": "passed"
});
formatter.after({
  "duration": 769355400,
  "status": "passed"
});
formatter.before({
  "duration": 1785904100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Criar leilao com usuario no ADM",
  "description": "",
  "id": "leilao-automatizado;criar-leilao-com-usuario-no-adm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Faco login com \"NoAdm\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verifico a ausencia do botao Create Auction",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1491690600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NoAdm",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "Leilao.facoLoginComE(String,String)"
});
formatter.result({
  "duration": 2436653700,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.verificoAAusenciaDoBotaoCreateAuction()"
});
formatter.result({
  "duration": 234452800,
  "status": "passed"
});
formatter.after({
  "duration": 1253024600,
  "status": "passed"
});
formatter.before({
  "duration": 1973096700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Finalizando um leilao",
  "description": "",
  "id": "leilao-automatizado;finalizando-um-leilao",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Digito um nome \"Delete Auction\" e valor inicial \"180\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Clico no leilao criado",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Clico em end auction",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verifico que leilao foi finalizado",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1597087800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JoaoPedroVarella",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "Leilao.facoLoginComE(String,String)"
});
formatter.result({
  "duration": 2369109300,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 263327400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delete Auction",
      "offset": 16
    },
    {
      "val": "180",
      "offset": 49
    }
  ],
  "location": "Leilao.digitoUmNomeEValorInicialParaOLeilao(String,String)"
});
formatter.result({
  "duration": 264595500,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 64440000,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoLeilaoCriado()"
});
formatter.result({
  "duration": 574825500,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmEndAuction()"
});
formatter.result({
  "duration": 63401100,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.verificoQueLeilaoFoiFinalizado()"
});
formatter.result({
  "duration": 2133881200,
  "status": "passed"
});
formatter.after({
  "duration": 1166292200,
  "status": "passed"
});
formatter.before({
  "duration": 1842101900,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Fazer um bid em um leilao aberto com valor menor que preco inicial",
  "description": "",
  "id": "leilao-automatizado;fazer-um-bid-em-um-leilao-aberto-com-valor-menor-que-preco-inicial",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Digito um nome \"Test Value\" e valor inicial \"50\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Clico no leilao criado",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Digito um valor no campo bid \"15\" e clico em bid",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verifico mensagem de erro sobre bid invalido",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1478251500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JoaoPedroVarella",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "Leilao.facoLoginComE(String,String)"
});
formatter.result({
  "duration": 2277889400,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 211291900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Value",
      "offset": 16
    },
    {
      "val": "50",
      "offset": 45
    }
  ],
  "location": "Leilao.digitoUmNomeEValorInicialParaOLeilao(String,String)"
});
formatter.result({
  "duration": 228014700,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 55933700,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoLeilaoCriado()"
});
formatter.result({
  "duration": 546901300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 30
    }
  ],
  "location": "Leilao.digitoUmValorNoCampoBidEClicoEmBid(String)"
});
formatter.result({
  "duration": 234732100,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.verificoMensagemDeErroSobreBidInvalido()"
});
formatter.result({
  "duration": 606011700,
  "status": "passed"
});
formatter.after({
  "duration": 789922800,
  "status": "passed"
});
formatter.before({
  "duration": 1968679700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Fazer um bid valido em um leilao aberto",
  "description": "",
  "id": "leilao-automatizado;fazer-um-bid-valido-em-um-leilao-aberto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Digito um nome \"Valid Value\" e valor inicial \"150\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Clico no leilao criado",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Digito um valor no campo bid \"160\" e clico em bid",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verifico inclusao valor correto \"160\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1360630100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JoaoPedroVarella",
      "offset": 16
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "Leilao.facoLoginComE(String,String)"
});
formatter.result({
  "duration": 2278974300,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 238628500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valid Value",
      "offset": 16
    },
    {
      "val": "150",
      "offset": 46
    }
  ],
  "location": "Leilao.digitoUmNomeEValorInicialParaOLeilao(String,String)"
});
formatter.result({
  "duration": 239241800,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 75161000,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoLeilaoCriado()"
});
formatter.result({
  "duration": 555762700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 30
    }
  ],
  "location": "Leilao.digitoUmValorNoCampoBidEClicoEmBid(String)"
});
formatter.result({
  "duration": 233671200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 33
    }
  ],
  "location": "Leilao.verificoInclusaoValorCorreto(String)"
});
formatter.result({
  "duration": 1151715000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c16[0]\u003e but was:\u003c16[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.Leilao.verificoInclusaoValorCorreto(Leilao.java:148)\r\n\tat ✽.Then Verifico inclusao valor correto \"160\"(src/test/resources/features/Automated.feature:44)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 771251600,
  "status": "passed"
});
});