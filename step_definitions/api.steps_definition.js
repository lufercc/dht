const {Given} = require('cucumber');
const request = require('../api/request');
const jsonQuery = require('json-query');
const expect = require('chai').expect

const context = {
    response: ''
}

Given(/^I send "([^"]*)" request with endpoint "([^"]*)"$/, async function (method, endpoint) {
    let result = await request.request(method, endpoint);
    context.response = result;
});

Given(/^I expect in response "([^"]*)" contains "([^"]*)"$/, async function (query, expectResult) {
    let actualResponse = await jsonQuery(query, {data : context.response.body}).value;
    expect(actualResponse.toString()).to.contains(expectResult.toString());
});

Given(/^I expect in status code is "([^"]*)"$/, function (statusExpect) {
    expect(statusExpect.toString()).to.equals(context.response.statusCode.toString());
});
