Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #04 Como usuario, creo un miembro y navego hacia el escribiendo su URL
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I create a member with name "$name_1" and email "$email_1"
  And I wait for 4 seconds