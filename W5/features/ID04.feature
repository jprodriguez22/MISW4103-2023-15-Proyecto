Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #04 Como usuario, creo un miembro y navego hacia el escribiendo su URL
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I create a member with name "$name_1" and email "$email_1"
  And I wait for 4 seconds
  Then I navigate to the member with name "$$name_1"
  And I wait for 2 seconds