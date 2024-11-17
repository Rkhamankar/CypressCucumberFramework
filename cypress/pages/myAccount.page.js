export class MyAccountPage {

    locator = require('../fixtures/Locator/MyAccount.json');

    myAccountPageTitleVisible(pageTitle) {
        cy.get(this.locator.pageTitle).invoke('text').then((actText) => {
            const trimmedText = actText.trim();
            expect(trimmedText).to.equal(pageTitle);
        })
    }

    verifyThankUMsgForRegister(thankYouMsg) {
        cy.wait(3000);
        cy.get(this.locator.thankYouMsgText, {timeout:30000}).invoke('text').then((actText) => {
            const trimmedText = actText.trim();
            expect(trimmedText).to.equal(thankYouMsg);
        })
    }

    registeredEmailIdVisible(emailId) {
        cy.get(this.locator.registerdEmailId).should("contain", emailId);
    }

}