Feature: Cambiar tema visual del blog

@user1 @web
Scenario: Cambiar tema visual del blog - test_10
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>" - test_10
  When I click on 'Change theme' Button
  And I wait for 2 seconds
  When I click on the 'User' Button
  And I wait for 2 seconds
  When I click on 'Your Profile' Button
  And I wait for 2 seconds