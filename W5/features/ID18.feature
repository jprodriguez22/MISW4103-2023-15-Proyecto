Feature: Borrar un miembro de la plataforma y validar el cambio de miembros en el listado

@user1 @web
Scenario: Borrar un miembro
  Given I navigate to the page "http://localhost:2368/ghost"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I wait for 2 seconds
  And I select a member 
  And I wait for 2 seconds
  And I click on 'Settings' Button
  And I wait for 2 seconds
  And I click on 'Delete' Button
  And I wait for 2 seconds
  And I click on 'Confirm' Button
  And I wait for 3 seconds

