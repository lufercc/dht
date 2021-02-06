Feature: Api Validation Test

  Scenario: Validate an email is Request

    Given I send "GET" request with endpoint "https://reqres.in/api/users?page=2"
    And I expect in status code is "200"
    And I expect in response "data..email" contains "michael.lawson@reqres.in"
