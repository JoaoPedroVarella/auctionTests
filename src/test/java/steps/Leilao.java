package steps;

import Utils.Global;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import general.PageElements;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import static org.junit.Assert.assertEquals;

public class Leilao {
    WebDriver driver;
    PageElements pageElements;

    public static void takeSnapShot(WebDriver webdriver,String fileWithPath) throws Exception{
        TakesScreenshot scrShot =((TakesScreenshot)webdriver);
        File SrcFile=scrShot.getScreenshotAs(OutputType.FILE);
        File DestFile=new File(fileWithPath);
        FileUtils.copyFile(SrcFile, DestFile);
    }

    @Before
    public void setup(){
        System.setProperty("webdriver.chrome.driver", Global.CHROME_DRIVER);
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(6000, TimeUnit.MILLISECONDS);
        pageElements = new PageElements(driver);
    }

    @After
    public void tearDown(){
       driver.quit();
    }

    @Given("^Que acesso o site$")
    public void queAcessoOSite() {
        driver.get(Global.URL);
    }

    @When("^Faco login com \"([^\"]*)\" e \"([^\"]*)\"$")
    public void facoLoginComE(String name, String password) throws Throwable {
        pageElements.login(name, password);
        Thread.sleep(2000);
    }

    @And("^Clico no campo Create Auction$")
    public void clicoNoCampoCreateAuction() {
        pageElements.clickFunction(pageElements.btnCreateAuctions);
    }

    @And("^Digito um nome \"([^\"]*)\" e valor inicial \"([^\"]*)\" para o leilao$")
    public void digitoUmNomeEValorInicialParaOLeilao(String name, String value) {
        pageElements.setAuctionValues(name, value);
    }

    @And("^Clico para dizer que o produto usado$")
    public void clicoParaDizerQueOProdutoUsado() throws Exception {
        pageElements.clickFunction(pageElements.btnUsed);
    }

    @Then("^Verifico a ausencia do botao Create Auction$")
    public void verificoAAusenciaDoBotaoCreateAuction() throws Exception {
        assertEquals("Sign Out", pageElements.getTextFunction(pageElements.btnCreateAuctions));
        takeSnapShot(driver, "target/screenshots/userNoAdm.png");
    }

    @And("^Clico em end auction$")
    public void clicoEmEndAuction() throws InterruptedException {
        pageElements.clickFunction(pageElements.btnEndAuction);
    }

    @Then("^Verifico que leilao foi finalizado$")
    public void verificoQueLeilaoFoiFinalizado()  throws InterruptedException, Exception  {
        Thread.sleep(2000);
        assertEquals(false, pageElements.vrfBtnEndAuction());
        takeSnapShot(driver, "target/screenshots/endAuction.png");
    }

    @And("^Clico no leilao criado$")
    public void clicoNoLeilaoCriado() {
        pageElements.clickFunction(pageElements.gridLastElementName);
    }

    @Then("^Verifico o leilao com \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\" e se campo de usado esta setado com \"([^\"]*)\"\\.$")
    public void verificoOLeilaoComESeCampoDeUsadoEstaSetado(String name, String user, String value, String used) throws Exception  {
        assertEquals(name, pageElements.getTextFunction(pageElements.gridLastElementName));
        assertEquals(user, pageElements.getTextFunction(pageElements.gridLastElementUser));
        assertEquals(value, pageElements.getTextFunction(pageElements.gridLastElementValue));
        assertEquals(used, pageElements.getTextFunction(pageElements.gridLastElementUsedProduct));
        pageElements.clickFunction(pageElements.gridLastElementName);
        takeSnapShot(driver, "target/screenshots/createdAuction.png");
    }

    @When("^Crio o usuario para os testes com os dados \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void crioOUsuarioParaOsTestesComOsDados(String name, String username, String password, String email, String cpf) {
        pageElements.createUser(name, username, password, email, cpf);
    }

    @And("^Seleciono campo ADM$")
    public void selecionoQueEADM() {
        pageElements.clickFunction(pageElements.btnAdmRegister);
    }

    @Then("^Crio usuario$")
    public void crioUsuario() {
        pageElements.clickFunction(pageElements.btnSignUpRegister);
    }

    @And("^Clico em sign up$")
    public void clicoEmSignUp() {
        pageElements.clickFunction(pageElements.btnSignUpAuction);
    }

    @And("^Digito um valor no campo bid \"([^\"]*)\" e clico em bid$")
    public void digitoUmValorNoCampoBidEClicoEmBid(String value) {
        pageElements.setValueBid(value);
        pageElements.clickFunction(pageElements.btnBid);
    }

    @Then("^Verifico mensagem de erro sobre bid invalido$")
    public void verificoMensagemDeErroSobreBidInvalido() throws AWTException, IOException {
        System.out.println(pageElements.alertMessage());
        assertEquals("It's not possible to bid this value.", pageElements.alertMessage());
        BufferedImage image = new Robot().createScreenCapture(new Rectangle(Toolkit.getDefaultToolkit().getScreenSize()));
        ImageIO.write(image, "png", new File("target/screenshots/alertMessage.png"));
        pageElements.alertMessage();
    }

        @Then("^Verifico inclusao valor correto \"([^\"]*)\"$")
    public void verificoInclusaoValorCorreto(String value) throws Exception {
        Thread.sleep(1000);
        takeSnapShot(driver, "target/screenshots/validValue.png");
        assertEquals(value,pageElements.getTextFunction(pageElements.gridLastBid));

    }
}
