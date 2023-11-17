Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #04 Como usuario, creo un miembro y navego hacia el escribiendo su URL
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID04 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID04 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID04 - 2"
  When I go to the members tab
  And I take a screenshot with the name "Ghost5\ID04 - 3"
  And I create a member with name "$name_1" and email "$email_1"
  And I take a screenshot with the name "Ghost5\ID04 - 4"
  And I wait for 4 seconds
  And I take a screenshot with the name "Ghost5\ID04 - 5"
