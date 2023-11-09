Feature: Iniciar sesión

@user1 @web
Scenario: Como usuario de Ghost, inicio sesión y accedo al dashboard
  Given I navigate to page "http://localhost:2370/ghost"
  And I wait for 3 seconds
  When I enter email "<LOGINEMAIL>"
  And I wait for 2 second
  And I enter password "<LOGINPASSWORD>"
  And I wait for 2 second
  And I click next
  And I wait for 3 second