import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from "../Fixture/fixtures";

const { Given, When, Then } = createBdd(test);



// --- Common navigation steps ---
Given('I navigate to {string}', async ({ loginPage, page }, url) => {
  await loginPage.navigateToURL(url);
  await page.pause();
});


Given('I click on My Account', async ({ loginPage }) => {
     await loginPage.clickMyAccount();
    });

When('I enter E-mail Address {string}', async ({ loginPage }, email) => {
  await loginPage.enterEmail(email);
});

When('I enter Password {string}', async ({ loginPage }, password) => {
  await loginPage.enterPassword(password);
});

When('I click on submit button', async ({ loginPage }) => {
     await loginPage.clickSubmit();
    });

Then('I should verify the url contains {string}', async ({ page }, expected: string) => { 
    expect(page.url()).toContain(expected);
 });



Given('the user navigates to the https:\\/\\/ecommerce-playground.lambdatest.io\\/ page', async ({}) => {
  // Step: Given the user navigates to the https://ecommerce-playground.lambdatest.io/ page
  // From: tests\UI_tests\Feature\Login.feature:14:5
});

Given('I clicks on the My Account', async ({}) => {
  // Step: And I clicks on the My Account
  // From: tests\UI_tests\Feature\Login.feature:15:5
});

When('the user clicks the login button', async ({}) => {
  // Step: When the user clicks the login button
  // From: tests\UI_tests\Feature\Login.feature:18:5
});

Then('the user should verify that user is not able to login and the url contains {string}', async ({}, arg: string) => {
  // Step: Then the user should verify that user is not able to login and the url contains "route=account/login"
  // From: tests\UI_tests\Feature\Login.feature:19:5
});

Given('the user is on the login page', async ({}) => {
  // Step: Given the user is on the login page
  // From: tests\UI_tests\Feature\Login.feature:22:5
});

When('the user clicks on the {string} link', async ({}, arg: string) => {
  // Step: When the user clicks on the "Forgot Password" link
  // From: tests\UI_tests\Feature\Login.feature:23:5
});

When('enters their registered email address', async ({}) => {
  // Step: And enters their registered email address
  // From: tests\UI_tests\Feature\Login.feature:24:5
});

Then('a password recovery email should be sent to the user\'s email address', async ({}) => {
  // Step: Then a password recovery email should be sent to the user's email address
  // From: tests\UI_tests\Feature\Login.feature:25:5
});
// When('enters their registered email address', async ({}) => {
//   // Step: And enters their registered email address
//   // From: tests\UI_tests\Feature\Login.feature:24:5
// });

// Then('a password recovery email should be sent to the user\'s email address', async ({}) => {
//   // Step: Then a password recovery email should be sent to the user's email address
//   // From: tests\UI_tests\Feature\Login.feature:25:5
// });

