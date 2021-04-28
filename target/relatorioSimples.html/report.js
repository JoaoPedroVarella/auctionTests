$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Automated.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#encoding: utf-8"
    }
  ],
  "line": 3,
  "name": "Leilao automatizado",
  "description": "",
  "id": "leilao-automatizado",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2937105400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Criando um leilao com produto usado",
  "description": "",
  "id": "leilao-automatizado;criando-um-leilao-com-produto-usado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Digito um nome \"Uno\" e valor inicial \"150\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Clico para dizer que o produto usado",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verifico o leilao com \"Uno\", \"Joao Pedro Varella\", \"150\" e se campo de usado esta setado com \"Yes\".",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1351971200,
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
  "duration": 2271182500,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 338153600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uno",
      "offset": 16
    },
    {
      "val": "150",
      "offset": 38
    }
  ],
  "location": "Leilao.digitoUmNomeEValorInicialParaOLeilao(String,String)"
});
formatter.result({
  "duration": 218338200,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoParaDizerQueOProdutoUsado()"
});
formatter.result({
  "duration": 84778100,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 68992900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Uno",
      "offset": 23
    },
    {
      "val": "Joao Pedro Varella",
      "offset": 30
    },
    {
      "val": "150",
      "offset": 52
    },
    {
      "val": "Yes",
      "offset": 94
    }
  ],
  "location": "Leilao.verificoOLeilaoComESeCampoDeUsadoEstaSetado(String,String,String,String)"
});
formatter.result({
  "duration": 691006700,
  "status": "passed"
});
formatter.after({
  "duration": 758072000,
  "status": "passed"
});
formatter.before({
  "duration": 1674890400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Criar leilao com usuario no ADM",
  "description": "",
  "id": "leilao-automatizado;criar-leilao-com-usuario-no-adm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Faco login com \"NoAdm\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Verifico a ausencia do botao Create Auction",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1391855500,
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
  "duration": 2366925900,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.verificoAAusenciaDoBotaoCreateAuction()"
});
formatter.result({
  "duration": 205259600,
  "status": "passed"
});
formatter.after({
  "duration": 1231195300,
  "status": "passed"
});
formatter.before({
  "duration": 1629520700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Finalizando um leilao",
  "description": "",
  "id": "leilao-automatizado;finalizando-um-leilao",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Digito um nome \"Delete Auction\" e valor inicial \"180\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Clico no leilao criado",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Clico em end auction",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verifico que leilao foi finalizado",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1443978700,
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
  "duration": 2332340300,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 202973700,
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
  "duration": 231266100,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 51947700,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoLeilaoCriado()"
});
formatter.result({
  "duration": 525087200,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmEndAuction()"
});
formatter.result({
  "duration": 89806000,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.verificoQueLeilaoFoiFinalizado()"
});
formatter.result({
  "duration": 2137424100,
  "status": "passed"
});
formatter.after({
  "duration": 1225880800,
  "status": "passed"
});
formatter.before({
  "duration": 1717814700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Fazer um bid em um leilao aberto com valor menor que preco inicial",
  "description": "",
  "id": "leilao-automatizado;fazer-um-bid-em-um-leilao-aberto-com-valor-menor-que-preco-inicial",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Digito um nome \"Test Value\" e valor inicial \"50\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Clico no leilao criado",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Digito um valor no campo bid \"15\" e clico em bid",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verifico mensagem de erro sobre bid invalido",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1309420900,
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
  "duration": 2278679300,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 228053500,
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
  "duration": 213756700,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 56553400,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoLeilaoCriado()"
});
formatter.result({
  "duration": 496103400,
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
  "duration": 245343700,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.verificoMensagemDeErroSobreBidInvalido()"
});
formatter.result({
  "duration": 419582500,
  "status": "passed"
});
formatter.after({
  "duration": 1085398300,
  "status": "passed"
});
formatter.before({
  "duration": 1677729600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Fazer um bid valido em um leilao aberto",
  "description": "",
  "id": "leilao-automatizado;fazer-um-bid-valido-em-um-leilao-aberto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "Que acesso o site",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Faco login com \"JoaoPedroVarella\" e \"123456\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "Clico no campo Create Auction",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Digito um nome \"Valid Value\" e valor inicial \"150\" para o leilao",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Clico em sign up",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Clico no leilao criado",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Digito um valor no campo bid \"160\" e clico em bid",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Verifico inclusao valor correto \"160\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Leilao.queAcessoOSite()"
});
formatter.result({
  "duration": 1357150700,
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
  "duration": 2262740300,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoCampoCreateAuction()"
});
formatter.result({
  "duration": 224817000,
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
  "duration": 266169900,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoEmSignUp()"
});
formatter.result({
  "duration": 64385400,
  "status": "passed"
});
formatter.match({
  "location": "Leilao.clicoNoLeilaoCriado()"
});
formatter.result({
  "duration": 457826400,
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
  "duration": 227617800,
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
  "duration": 1139378200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c16[0]\u003e but was:\u003c16[1]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.Leilao.verificoInclusaoValorCorreto(Leilao.java:148)\r\n\tat ✽.Then Verifico inclusao valor correto \"160\"(src/test/resources/features/Automated.feature:46)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1278103300,
  "status": "passed"
});
});