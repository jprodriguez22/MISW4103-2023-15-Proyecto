Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #07 Como usuario, navego hacia un miembro y edito su correo con un nombre
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a member with priori dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to members page
  And I wait for 1 seconds
  And I edit a member with priori random name in email
  And I wait for 2 seconds