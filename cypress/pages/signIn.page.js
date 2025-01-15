export class SignInPage {

    locator = require('../fixtures/Locator/SignIn.json');

    enterUserEmailId(emailId) {
        cy.get(this.locator.userEmail).type(emailId);
    }
    
    enterUserPassword(password) {
        cy.get(this.locator.userPwd).type(password);
    }

    clickSignInBtn() {
        cy.get(this.locator.signInBtn).click();
    }

    gitAction(){
        cy.get("abc").click();
    }

}