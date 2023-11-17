Feature: Editar el correo de un miembro creado en la plataforma y validar el cambio de sus datos personales

@user1 @web
Scenario: Editar el correo de un miembro
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID07 - 0"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID07 - 1"
  When I go to the members tab
  And I take a screenshot with the name "Ghost5\ID07 - 2"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID07 - 3"
  And I select a member 
  And I take a screenshot with the name "Ghost5\ID07 - 4"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID07 - 5"
  And I change email "$email_1"
  And I take a screenshot with the name "Ghost5\ID07 - 6"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID07 - 7"
  And I save the note
  And I take a screenshot with the name "Ghost5\ID07 - 8"
  Then I validate the note is saved for the member
  And I take a screenshot with the name "Ghost5\ID07 - 9"

