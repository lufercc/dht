var {Given, Then} = require('cucumber');
var chai = require('chai')
const storePage = require('../page/store.page');
const cartPage = require('../page/cart.page');
const singInPage = require('../page/sing-in.page');

const expect = chai.expect;

const pages = {
    store_page : storePage,
    cart_page : cartPage,
    sing_in_page: singInPage
}

const context = {
    page : ''
}

Given(/^I open chrome on "([^"]*)"$/, function (page) {
    context.page = pages[page];
    browser.url(context.page.url);
    browser.maximizeWindow();

});

Given(/^I hover on "([^"]*)" with value "([^"]*)"$/, function (locator , text) {
    let moveLocator = storePage.locator.hover[locator].replace('_text_', text);
    $(moveLocator).scrollIntoView();
    $(moveLocator).moveTo();
});


Then(/^I wait the event will be processed$/, function () {
    return new Promise(resolve => setTimeout(resolve, 1000));
});
Given(/^I click on "([^"]*)" with "([^"]*)" text$/, function (locator, text) {
    let clickLocator = context.page.locator.clickable[locator].replace('_text_', text);
    $(clickLocator).waitForClickable();
    $(clickLocator).click();
});

Given(/^I click on "([^"]*)"$/, function (locator) {
    let clickLocator = context.page.locator.clickable[locator];
    $(clickLocator).waitForClickable();
    $(clickLocator).click();
});
Given(/^I am on the "([^"]*)"$/, function (page) {
    context.page = pages[page];
});

Given(/^I go to "([^"]*)"$/, function (page) {
    context.page = pages[page];
    let clickLocator = context.page.go;
    $(clickLocator).click();
});

Given(/^I fill "([^"]*)" with "([^"]*)"$/, function (locator, value) {
    let fieldLocator  = context.page.locator.field[locator]
    $(fieldLocator).setValue(value);
});

Then(/^I expect "([^"]*)" text is "([^"]*)"$/, function (locator, expected) {
    let labelLocator  = context.page.locator.labels[locator]
    let actual = $(labelLocator).getText();
    expect(expected.toString()).to.equal(actual.toString());
});
