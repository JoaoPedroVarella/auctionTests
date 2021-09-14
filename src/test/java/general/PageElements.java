package general;

import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;

public class PageElements extends PageObject {

    @FindBy(xpath = "/html[1]/body[1]/app-root[1]/app-login[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/input[1]")
    public WebElement inputUserName;

    @FindBy(xpath = "/html[1]/body[1]/app-root[1]/app-login[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/input[1]")
    public WebElement inputPassword;

    @FindBy(css = "button.btn.float-right.login_btn")
    public WebElement btnLogin;

    @FindBy(css = "div.alert.alert-danger")
    public WebElement txtAlertLogin;

    @FindBy(css = "div.container div.d-flex.justify-content-center.h-100 div.card div.card-footer div.d-flex.justify-content-center.links > a:nth-child(1)")
    public WebElement btnSignUp;

    @FindBy(css = "#name")
    public WebElement inputNameRegister;

    @FindBy(css = "#username")
    public WebElement inputUserNameRegister;

    @FindBy(css = "#password")
    public WebElement inputPasswordRegister;

    @FindBy(css = "#email")
    public WebElement inputEmailRegister;

    @FindBy(css = "#cpf")
    public WebElement inputCpfRegister;

    @FindBy(css = "#admin")
    public WebElement btnAdmRegister;

    @FindBy(css = "div.container div.d-flex.justify-content-center.h-100 div.card div.card-body form.ng-untouched.ng-pristine.ng-invalid div.form-group:nth-child(7) > button.btn.float-right.login_btn")
    public WebElement btnSignUpRegister;

    @FindBy(css = "nav.navbar.navbar-expand-lg.navbar-light.bg-light div.navbar-collapse.collapse.show ul.navbar-nav.mr-auto li.nav-item:nth-child(2) > a.nav-link")
    public WebElement btnAuctions;

    @FindBy (xpath = "//app-header/nav[1]/div[1]/ul[1]/li[3]/a[1]")
    public WebElement btnCreateAuctions;

    @FindBy (css = "#name")
    public WebElement inputAuctionName;

    @FindBy (css = "#value")
    public WebElement inputAuctionInitialValue;

    @FindBy (css = "#used")
    public WebElement btnUsed;

    @FindBy (css = "div.container:nth-child(2) app-new-auction:nth-child(2) form.ng-dirty.ng-valid.ng-touched:nth-child(2) div.form-group:nth-child(4) > button.btn.float-right.login_btn")
    public WebElement btnSignUpAuction;

    @FindBy (css = "nav.navbar.navbar-expand-lg.navbar-light.bg-light div.navbar-collapse.collapse.show ul.navbar-nav.mr-auto li.nav-item:nth-child(4) > a.nav-link")
    public WebElement btnSignOut;

    @FindBy (css = "div.container:nth-child(2) app-detail-auction:nth-child(2) div.card:nth-child(1) div.card-body div:nth-child(6) > button.btn.btn-primary")
    public WebElement btnEndAuction;

    @FindBy (id = "value")
    public WebElement inputBid;

    @FindBy (xpath = "//button[contains(text(),'Bid')]")
    public WebElement btnBid;

    @FindBy (xpath = "//tbody/tr[last()]/td[1]/a[1]")
    public WebElement gridLastElementName;

    @FindBy (xpath = "//tbody/tr[last()]/td[2]")
    public WebElement gridLastElementValue;

    @FindBy (xpath = "//tbody/tr[last()]/td[4]")
    public WebElement gridLastElementUser;

    @FindBy (xpath = "//tbody/tr[last()]/td[3]")
    public WebElement gridLastElementUsedProduct;

    @FindBy (xpath = "/html[1]/body[1]/app-root[1]/app-main[1]/div[1]/app-detail-auction[1]/div[3]/div[2]/table[1]/tbody[1]/tr[last()]/td[2]")
    public WebElement gridLastBid;

    //constructor
    public PageElements(WebDriver driver){
        super(driver);
    }

    public void login(String name, String password){
        inputUserName.sendKeys(name);
        inputPassword.sendKeys(password);
        btnLogin.click();
    }

    public void setAuctionValues(String name, String value){
        inputAuctionName.sendKeys(name);
        inputAuctionInitialValue.clear();
        inputAuctionInitialValue.sendKeys(value);
    }

    public Boolean vrfBtnEndAuction() {
        return btnEndAuction.isEnabled();
    }

    public void createUser(String name, String username, String password, String email, String cpf){
        btnSignUp.click();
        inputNameRegister.sendKeys(name);
        inputUserNameRegister.sendKeys(username);
        inputPasswordRegister.sendKeys(password);
        inputEmailRegister.sendKeys(email);
        inputCpfRegister.sendKeys(cpf);
    }

    public void setValueBid(String value){
        inputBid.click();
        inputBid.clear();
        inputBid.sendKeys(value);
    }

    public void clickFunction(WebElement element){
        element.click();
    }

    public String getTextFunction(WebElement element){
        return element.getText();
    }

    public String alertMessage(){
        return driver.switchTo().alert().getText();
    }

}
