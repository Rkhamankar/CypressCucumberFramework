import { CreateAccountPage } from './createAccount.page'; 
import { MyAccountPage } from './myAccount.page';
import { SignInPage } from './signIn.page';

export class GlobalPage {

    locator = require('../fixtures/Locator/Global.json');
    featureName = '';
    data = '';
    deviceType = '';
    createAccountObj = new CreateAccountPage();
    myAccountObj = new MyAccountPage();
    signInObj = new SignInPage();

    constructor() {
        this.deviceType = this.getDeviceType();
        this.createPageObj();
    }

    createPageObj() {
        this.createAccountObj.deviceType = this.deviceType;
        this.myAccountObj.deviceType = this.deviceType;
        this.signInObj.deviceType = this.deviceType;
    }

    getDeviceType() {
        if (Cypress.config("viewportWidth") <= Cypress.env("deviceTypeThreshold")) {
            console.log('deviceType>>>>>>mobile');
            return "mobile";
        } else {
            console.log('deviceType>>>>>>desktop');
            return "desktop";
        }
    }
    readTestData() {
        console.log('test file----' + Cypress.env('testDataFile'));
        cy.fixture(Cypress.env('testDataFile')).then((file) => {
            this.data = file;
        })
    }

    takeScreenShot() {
        if (Cypress.env('screenshot')) {
            cy.get("html, body").invoke(
                "attr",
                "style",
                "height: auto; scroll-behavior: auto;"
            );
            cy.screenshot(this.featureName.split('.')[0] + '_' + Cypress.currentTest.title + '_' + new Date().toLocaleString('en-GB').replace(/[/, :]/g, ''));
        }
    }

    visitApplication() {
        cy.visit(Cypress.env("baseUrl"));
    }

    createEmailIdDatainJson() {
        const randomNum = Math.floor(Math.random() * 999) + 1;           
        const email = `qatestfc${randomNum}@yopmail.com`;
        cy.writeFile("cypress/fixtures/dataFile/create.json", {
            registeredEmail: email
        })
    }

    clickSignInLink() {
        cy.get(this.locator.signIn).click();
    }

    clickCreateAccountLink() {
        cy.get(this.locator.createAccountLink).click();
    }

    clickCustomerMenu() {
        cy.get(this.locator.customerMenu).eq(0).click();
    }

    clickMyAccountMenu() {
        cy.get(this.locator.myAccountMenu).eq(0).click();
    }

    lumaLogoVisible() {
        cy.get(this.locator.lumaLogo).should("be.visible");
    }

    welcomeTextvisible(welcomeText) {
        cy.wait(2000);
        cy.get(this.locator.welcomeText).eq(0).invoke('text').then((actText) => {
            const trimmedText = actText.trim();
            expect(trimmedText).include(welcomeText);
        })
    }

    // readEmailIdDataFrmJson() {
    //      cy.readFile("cypress/fixtures/dataFile/create.json").then((data) => {
    //         cy.log("Read value: " + data.registeredEmail);
    //         return data.registeredEmail; 
    //     });
    // }
}
