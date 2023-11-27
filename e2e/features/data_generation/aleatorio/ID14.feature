Feature: Editar la contraseña del usuario loggeado y probar el inicio de sesión

@user1 @web
Scenario: Cambiar la contraseña del usuario y probar
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I click on the 'User' Button
  And I wait for 2 seconds
  When I click on 'Your Profile' Button
  And I wait for 2 seconds
  When I click on 'Change Password' Button
  And I wait for 1 seconds
  When I write my current password "<LOGINPASSWORD>" and my new password "<NEWPASSWORD>"
  And I wait for 1 seconds
  When I click on 'Change Password red' Button
  And I wait for 2 seconds
  When I click on 'Save' Button
  And I wait for 2 seconds
  When I click on 'Done' Button
  And I wait for 1 seconds
  When I click on the 'User' Button
  And I wait for 5 seconds
  When I click on 'Sign Out' Button
  And I wait for 3 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<NEWPASSWORD>"
  When I click on the 'User' Button
  And I wait for 2 seconds
  When I click on 'Your Profile' Button
  And I wait for 2 seconds
  When I click on 'Change Password' Button
  And I wait for 1 seconds
  When I write my current password "<NEWPASSWORD>" and my new password "<LOGINPASSWORD>"
  And I wait for 1 seconds
  When I click on 'Change Password red' Button
  And I wait for 2 seconds
  When I click on 'Save' Button
