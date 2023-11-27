Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #14 Como usuario, navego hacia mi perfil y cambio la contraseña por un id
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  When I load a dynamic dataset
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to 'My Profile'
  And I wait for 2 seconds
  And I change my current password "<LOGINPASSWORD>" with dynamic random password
  And I wait for 2 seconds
