import faker from 'faker';

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = faker.internet.password(7);
const review = faker.lorem.sentence();
const title = faker.random.words();
const ingredients = faker.random.words();
const details = faker.lorem.paragraph();

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
      .pause(1000)
      .click('#btn-add')
      .pause(2000)
      .setValue('#title', title)
      .pause(2000)
      .setValue('#ingredients', ingredients)
      .pause(2000)
      .setValue('#details-text-area', details)
      .pause(1000)
      .click('#submit-recipe')
      .pause(3000)
      .click('.btn-view')
      .pause(2000)
      .click('.btn-favorited')
      .pause(2000)
      .click('.btn-favorited')
      .pause(2000)
      .click('#btn-thumbs-up')
      .pause(2000)
      .click('#btn-thumbs-up')
      .pause(2000)
      .click('#btn-thumbs-down')
      .pause(2000)
      .click('#btn-thumbs-down')
      .pause(2000)
      .click('#btn-thumbs-up')
      .pause(2000)
      .click('#btn-thumbs-down')
      .pause(2000)
      .getLocationInView('#reviews-form')
      .pause(2000)
      .waitForElementVisible('#reviews-form', 1000)
      .pause(1000)
      .setValue('#review-input-field', review)
      .pause(2000)
      .click('#submit-review')
      .getLocationInView('.reviews')
      .pause(2000)
      .getLocationInView('#btn-manage')
      .pause(1000)
      .click('#btn-manage')
      .pause(2000)
      .click('#btn-edit-recipe')
      .pause(2000)
      .waitForElementVisible('.current-page', 1000)
      .pause(2000)
      .setValue('#ingredients', ingredients)
      .pause(2000)
      .setValue('#details-text-area', details)
      .pause(1000)
      .click('#submit-recipe')
      .pause(2000)
      .getLocationInView('#btn-manage')
      .pause(1000)
      .click('#btn-manage')
      .pause(1000)
      .click('#btn-delete-recipe')
      .pause(2000)
      .waitForElementVisible('.swal-modal', 2000)
      .click('.swal-button--delete')
      .pause(3000)
      .waitForElementVisible('.current-page', 3000)
      .pause(1000)
      .click('#btn-catalog')
      .end();
  }
};
