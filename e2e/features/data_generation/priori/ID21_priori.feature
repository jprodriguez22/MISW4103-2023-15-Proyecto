Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #21 Como usuario, navego hacia mi perfil y cambio la biografía con una contraseña
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a priori dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to 'My Profile'
  And I wait for 2 seconds
  And I change the bio with priori random password
  And I wait for 2 seconds