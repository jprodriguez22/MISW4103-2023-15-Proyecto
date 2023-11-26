Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #05 Como usuario, creo un miembro y valido el incremento
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 4 seconds
  When I go to the members tab
  And I create a member with name "$name_1" and email "$email_1"
  And I wait for 2 seconds
  Then I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 4 seconds