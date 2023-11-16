Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #05 Como usuario, creo un miembro y valido el incremento
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID05 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID05 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID05 - 2 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID05 - 3 - Ghost5"
  And I navigate to page "http://146.190.196.137:2368/ghost/#/members"
  And I take a screenshot with the name "ID05 - 4 - Ghost5"
  And I wait for 4 seconds
  And I take a screenshot with the name "ID05 - 5 - Ghost5"
  When I go to the members tab
  And I take a screenshot with the name "ID05 - 6 - Ghost5"
  And I create a member with name "$name_1" and email "$email_1"
  And I take a screenshot with the name "ID05 - 7 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID05 - 8 - Ghost5"
  Then I navigate to page "http://146.190.196.137:2368/ghost/#/members"
  And I take a screenshot with the name "ID05 - 9 - Ghost5"
  And I wait for 4 seconds
  And I take a screenshot with the name "ID05 - 10 - Ghost5"
