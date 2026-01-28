// Generated from: tests\UI_tests\Feature\Login.feature
import { test } from "../../../../tests/UI_tests/Fixture/fixtures.ts";

test.describe('Login', () => {

  test('verify user is able to login with valid credentials', async ({ Given, When, Then, And, loginPage, page }) => { 
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { loginPage, page }); 
    await And('I click on My Account', null, { loginPage }); 
    await And('I enter E-mail Address "galantjie@gmail.com"', null, { loginPage }); 
    await And('I enter Password "Faakhirah@10"', null, { loginPage }); 
    await When('I click on submit button', null, { loginPage }); 
    await Then('I should verify the url contains "route=account/account"', null, { page }); 
  });

  test('Verify user is not able login with following credentials', async ({ Given, When, Then, And, loginPage }) => { 
    await Given('the user navigates to the https://ecommerce-playground.lambdatest.io/ page'); 
    await And('I clicks on the My Account'); 
    await And('I enter E-mail Address "test@example.com "', null, { loginPage }); 
    await And('I enter Password "testpassword"', null, { loginPage }); 
    await When('the user clicks the login button'); 
    await Then('the user should verify that user is not able to login and the url contains "route=account/login"'); 
  });

  test.describe('Password recovery process', () => {

    test('Example #1', async ({ Given, When, Then, And }) => { 
      await Given('the user is on the login page'); 
      await When('the user clicks on the "Forgot Password" link'); 
      await And('enters their registered email address'); 
      await Then('a password recovery email should be sent to the user\'s email address'); 
    });

    test('Example #2', async ({ Given, When, Then, And }) => { 
      await Given('the user is on the login page'); 
      await When('the user clicks on the "Forgot Password" link'); 
      await And('enters their registered email address'); 
      await Then('a password recovery email should be sent to the user\'s email address'); 
    });

    test('Example #3', async ({ Given, When, Then, And }) => { 
      await Given('the user is on the login page'); 
      await When('the user clicks on the "Forgot Password" link'); 
      await And('enters their registered email address'); 
      await Then('a password recovery email should be sent to the user\'s email address'); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_tests\\Feature\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I click on My Account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter E-mail Address \"galantjie@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"galantjie@gmail.com\"","children":[{"start":24,"value":"galantjie@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter Password \"Faakhirah@10\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Faakhirah@10\"","children":[{"start":18,"value":"Faakhirah@10","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I click on submit button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should verify the url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":33,"value":"\"route=account/account\"","children":[{"start":34,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given the user navigates to the https://ecommerce-playground.lambdatest.io/ page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I clicks on the My Account","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-mail Address \"test@example.com \"","stepMatchArguments":[{"group":{"start":23,"value":"\"test@example.com \"","children":[{"start":24,"value":"test@example.com ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter Password \"testpassword\"","stepMatchArguments":[{"group":{"start":17,"value":"\"testpassword\"","children":[{"start":18,"value":"testpassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the user should verify that user is not able to login and the url contains \"route=account/login\"","stepMatchArguments":[{"group":{"start":75,"value":"\"route=account/login\"","children":[{"start":76,"value":"route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Forgot Password\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Forgot Password\"","children":[{"start":24,"value":"Forgot Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And enters their registered email address","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then a password recovery email should be sent to the user's email address","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Forgot Password\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Forgot Password\"","children":[{"start":24,"value":"Forgot Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And enters their registered email address","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then a password recovery email should be sent to the user's email address","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":41,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When the user clicks on the \"Forgot Password\" link","stepMatchArguments":[{"group":{"start":23,"value":"\"Forgot Password\"","children":[{"start":24,"value":"Forgot Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And enters their registered email address","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then a password recovery email should be sent to the user's email address","stepMatchArguments":[]}]},
]; // bdd-data-end