Feature: Editar el correo de un miembro creado en la plataforma y validar el cambio de sus datos personales

@user1 @web
Scenario: Editar el correo de un miembro
  Given I navigate to the page "<GHOST5>"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I wait for 2 seconds
  And I select a member 
  And I wait for 2 seconds
  And I change email "$email_1"
  And I wait for 2 seconds
  And I save the note
  Then I validate the note is saved for the member
