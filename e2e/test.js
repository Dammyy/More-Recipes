import faker from 'faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password(7);
module.exports = {
  test(browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .click('.welcome-msg .home-logged-in a#signup')
      .pause(1000)
      .waitForElementVisible('h2.form-signin-heading', 1000)
      .pause(1000)
      .setValue('#firstName', firstName)
      .pause(1000)
      .setValue('#lastName', lastName)
      .pause(1000)
      .setValue('#email', email)
      .pause(1000)
      .setValue('#password', password)
      .pause(1000)
      .setValue('#password-confirm', password)
      .pause(2000)
      .click('button[type=submit]')
      .pause(2000)
      .waitForElementVisible('.current-page', 1000)
      .click('.btn-view')
      .end();
  }
};
