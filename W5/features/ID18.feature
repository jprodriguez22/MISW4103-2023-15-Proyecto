Feature: Borrar un miembro de la plataforma y validar el cambio de miembros en el listado

@user1 @web
Scenario: Borrar un miembro
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID18 - 0 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID18 - 1 - Ghost5"
  When I go to the members tab
  And I take a screenshot with the name "ID18 - 2 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID18 - 3 - Ghost5"
  And I select a member 
  And I take a screenshot with the name "ID18 - 4 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID18 - 5 - Ghost5"
  And I click on 'Settings' Button
  And I take a screenshot with the name "ID18 - 6 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID18 - 7 - Ghost5"
  And I click on 'Delete' Button
  And I take a screenshot with the name "ID18 - 8 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID18 - 9 - Ghost5"
  And I click on 'Confirm' Button
  And I take a screenshot with the name "ID18 - 10 - Ghost5"
  And I wait for 3 seconds
  And I take a screenshot with the name "ID18 - 11 - Ghost5"


