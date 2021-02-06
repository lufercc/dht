Feature: buy Item

  # given I have a user already created, with follow credentials "dh@test.com / control123"
  Background:
    Given I open chrome on "store_page"
    And I go to "sing_in_page"
    And I fill "email" with "dh@test.com"
    And I fill "password" with "control123"
    And I click on "sing_in_button"

  Scenario: buy an item with user already logged
    When I go to "store_page"
    And I hover on "store_item" with value "Blouse"
    And I click on "add_to_card" with "Blouse" text
    And I click on "proceed_check_out"
    And I am on the "cart_page"
    Then I expect "total_price" text is "$30.16"
    And I click on "proceed_check_out"
    And I click on "proceed_check_out"
    And I click on "agree_term_service"
    And I click on "proceed_check_out"
    And I click on "pay_by_check"
    And I click on "confirm_my_order"
    And I expect "alert_message" text is "Your order on My Store is complete."
