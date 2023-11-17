Feature: Borrar un miembro de la plataforma y validar el cambio de miembros en el listado

@user1 @web
Scenario: Borrar un miembro
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID18 - 0"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID18 - 1"
  When I go to the members tab
  And I take a screenshot with the name "Ghost5\ID18 - 2"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID18 - 3"
  And I select a member 
  And I take a screenshot with the name "Ghost5\ID18 - 4"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID18 - 5"
  And I click on 'Settings' Button
  And I take a screenshot with the name "Ghost5\ID18 - 6"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID18 - 7"
  And I click on 'Delete' Button
  And I take a screenshot with the name "Ghost5\ID18 - 8"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID18 - 9"
  And I click on 'Confirm' Button
  And I take a screenshot with the name "Ghost5\ID18 - 10"
  And I wait for 3 seconds
  And I take a screenshot with the name "Ghost5\ID18 - 11"


