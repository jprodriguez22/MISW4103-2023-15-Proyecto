Feature: Editar la contraseña del usuario loggeado y probar el inicio de sesión

@user1 @web
Scenario: Cambiar la contraseña del usuario y probar
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID14 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID14 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID14 - 2 - Ghost5"
  When I click on the 'User' Button
  And I take a screenshot with the name "ID14 - 3 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 4 - Ghost5"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "ID14 - 5 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 6 - Ghost5"
  When I click on 'Change Password' Button
  And I take a screenshot with the name "ID14 - 7 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID14 - 8 - Ghost5"
  When I write my current password "<LOGINPASSWORD>" and my new password "<NEWPASSWORD>"
  And I take a screenshot with the name "ID14 - 9 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID14 - 10 - Ghost5"
  When I click on 'Change Password red' Button
  And I take a screenshot with the name "ID14 - 11 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 12 - Ghost5"
  When I click on 'Save' Button
  And I take a screenshot with the name "ID14 - 13 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 14 - Ghost5"
  When I click on 'Done' Button
  And I take a screenshot with the name "ID14 - 15 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID14 - 16 - Ghost5"
  When I click on the 'User' Button
  And I take a screenshot with the name "ID14 - 17 - Ghost5"
  And I wait for 5 seconds
  And I take a screenshot with the name "ID14 - 18 - Ghost5"
  When I click on 'Sign Out' Button
  And I take a screenshot with the name "ID14 - 19 - Ghost5"
  And I wait for 3 seconds
  And I take a screenshot with the name "ID14 - 20 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<NEWPASSWORD>"
  And I take a screenshot with the name "ID14 - 21 - Ghost5"
  When I click on the 'User' Button
  And I take a screenshot with the name "ID14 - 22 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 23 - Ghost5"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "ID14 - 24 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 25 - Ghost5"
  When I click on 'Change Password' Button
  And I take a screenshot with the name "ID14 - 26 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID14 - 27 - Ghost5"
  When I write my current password "<NEWPASSWORD>" and my new password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID14 - 28 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID14 - 29 - Ghost5"
  When I click on 'Change Password red' Button
  And I take a screenshot with the name "ID14 - 30 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID14 - 31 - Ghost5"
  When I click on 'Save' Button
  And I take a screenshot with the name "ID14 - 32 - Ghost5"

