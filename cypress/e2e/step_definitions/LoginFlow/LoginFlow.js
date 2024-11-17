import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


import { GlobalPage } from "../../../pages/global.page";

const pageObj = new GlobalPage();

beforeEach(() => {
    pageObj.readTestData();
})

afterEach(() => {
    pageObj.takeScreenShot();
})

Given("User navigate to LUMA application", () => {
    pageObj.visitApplication();
})

Given("User click on create my account link", () => {
    pageObj.clickCreateAccountLink();
})

When("User enters First Name {string}", (fName) => {
    pageObj.createAccountObj.enterFirstName(pageObj.data[fName]);
})
And("User enters Last Name {string}",(lName) => {
    pageObj.createAccountObj.enterLastName(pageObj.data[lName]);
})

And("User enters Password {string}", (pwd) => {
    pageObj.createAccountObj.enterPassword(pageObj.data[pwd]);
})

And("User enters Confirm Password {string}", (pwd) => {
    pageObj.createAccountObj.enterConfirmPassword(pageObj.data[pwd]);
})

When("User enter email address", () => {
    pageObj.createEmailIdDatainJson();  // Create email in the JSON file
    cy.readFile("cypress/fixtures/dataFile/create.json").then((readData) => {
        cy.log("Read value: " + readData.registeredEmail); // Log the value read from the file
        pageObj.createAccountObj.enterEmailId(readData.registeredEmail);
    });
})

And("User click on Create an Account button", () => {
    pageObj.createAccountObj.clickCreateAccountBtn();
})

Then("My Account page {string} should be displayed", (myAccountPageTitle) => {
        pageObj.myAccountObj.myAccountPageTitleVisible(pageObj.data[myAccountPageTitle]);
})

And("Thank you message for Account creation {string} should be displayed",(thankYouMsg) => {
        pageObj.myAccountObj.verifyThankUMsgForRegister(pageObj.data[thankYouMsg]);
})

And("Registered email address should be visible", () => {
    cy.readFile("cypress/fixtures/dataFile/create.json").then((readData) => {
        cy.log("Read value: " + JSON.stringify(readData));
        if (typeof readData.registeredEmail === 'string') {
            pageObj.myAccountObj.registeredEmailIdVisible(readData.registeredEmail);
        } else {
            cy.log("Error: readData.registeredEmail is not a string or is undefined");
        }
    });
});

Given("User click on Sign In link", () => {
    pageObj.clickSignInLink();
})

When("User enter email id", () => {
    cy.readFile("cypress/fixtures/dataFile/create.json").then((readData) => {
        cy.log("Read value: " + readData.registeredEmail);
        pageObj.signInObj.enterUserEmailId(readData.registeredEmail);
    });
})

And("User enters Password for login {string}", (userPwd) => {
    pageObj.signInObj.enterUserPassword(pageObj.data[userPwd]);
}) 

And("User click on Sign In button", () => {
    pageObj.signInObj.clickSignInBtn();
}) 

Then("Luma Logo should be displayed", () => {
    pageObj.lumaLogoVisible();
})

And("Welcome {string} should be displayed on customer menu", (welcomeText) => {
    pageObj.welcomeTextvisible(pageObj.data[welcomeText]);
})

When("User click on customer menu", () => {
    pageObj.clickCustomerMenu();
})

And("User click on My Account link", () => {
    pageObj.clickMyAccountMenu();
})


