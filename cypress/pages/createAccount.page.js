
export class CreateAccountPage {

    locator = require('../fixtures/Locator/CreateAccount.json');

    enterFirstName(fName) {
        cy.get(this.locator.fName).type(fName);
    }

    enterLastName(lName) {
        cy.get(this.locator.lName).type(lName);
    }

    enterPassword(password) {
        cy.get(this.locator.password).type(password);
    }

    enterConfirmPassword(confirmPwd) {
        cy.get(this.locator.confirmPwd).type(confirmPwd);
    }

    enterEmailId(emailId) {
        cy.get(this.locator.emailId).type(emailId);
    }

    clickCreateAccountBtn() {
        cy.get(this.locator.createAccountBtn).click();
    }
}