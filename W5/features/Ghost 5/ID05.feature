Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #05 Como usuario, creo un miembro y valido el incremento
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID05 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID05 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID05 - 2"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID05 - 3"
  And I navigate to page "http://146.190.196.137:2368/ghost/#/members"
  And I take a screenshot with the name "Ghost5\ID05 - 4"
  And I wait for 4 seconds
  And I take a screenshot with the name "Ghost5\ID05 - 5"
  When I go to the members tab
  And I take a screenshot with the name "Ghost5\ID05 - 6"
  And I create a member with name "$name_1" and email "$email_1"
  And I take a screenshot with the name "Ghost5\ID05 - 7"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID05 - 8"
  Then I navigate to page "http://146.190.196.137:2368/ghost/#/members"
  And I take a screenshot with the name "Ghost5\ID05 - 9"
  And I wait for 4 seconds
  And I take a screenshot with the name "Ghost5\ID05 - 10"
