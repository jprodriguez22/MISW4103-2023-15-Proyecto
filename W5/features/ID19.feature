Feature: Editar un miembro creado en la plataforma y validar el cambio de sus datos personales

@user1 @web
Scenario: Editar el nombre de un miembro
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID19 - 0 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID19 - 1 - Ghost5"
  When I go to the members tab
  And I take a screenshot with the name "ID19 - 2 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID19 - 3 - Ghost5"
  And I select a member 
  And I take a screenshot with the name "ID19 - 4 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID19 - 5 - Ghost5"
  And I add a descriptive name "$string_1"
  And I take a screenshot with the name "ID19 - 6 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID19 - 7 - Ghost5"
  And I save the note
  And I take a screenshot with the name "ID19 - 8 - Ghost5"
  Then I validate the note is saved for the member
  And I take a screenshot with the name "ID19 - 9 - Ghost5"

