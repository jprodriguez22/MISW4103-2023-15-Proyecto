Feature: Editar la contraseña del usuario loggeado y probar el inicio de sesión

@user1 @web
Scenario: Cambiar la contraseña del usuario y probar
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID14 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID14 - 2"
  When I click on the 'User' Button
  And I take a screenshot with the name "Ghost5\ID14 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 4"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "Ghost5\ID14 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 6"
  When I click on 'Change Password' Button
  And I take a screenshot with the name "Ghost5\ID14 - 7"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 8"
  When I write my current password "<LOGINPASSWORD>" and my new password "<NEWPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID14 - 9"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 10"
  When I click on 'Change Password red' Button
  And I take a screenshot with the name "Ghost5\ID14 - 11"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 12"
  When I click on 'Save' Button
  And I take a screenshot with the name "Ghost5\ID14 - 13"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 14"
  When I click on 'Done' Button
  And I take a screenshot with the name "Ghost5\ID14 - 15"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 16"
  When I click on the 'User' Button
  And I take a screenshot with the name "Ghost5\ID14 - 17"
  And I wait for 5 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 18"
  When I click on 'Sign Out' Button
  And I take a screenshot with the name "Ghost5\ID14 - 19"
  And I wait for 3 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 20"
  And I login into the page with my email "<LOGINEMAIL>" and password "<NEWPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID14 - 21"
  When I click on the 'User' Button
  And I take a screenshot with the name "Ghost5\ID14 - 22"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 23"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "Ghost5\ID14 - 24"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 25"
  When I click on 'Change Password' Button
  And I take a screenshot with the name "Ghost5\ID14 - 26"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 27"
  When I write my current password "<NEWPASSWORD>" and my new password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID14 - 28"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 29"
  When I click on 'Change Password red' Button
  And I take a screenshot with the name "Ghost5\ID14 - 30"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID14 - 31"
  When I click on 'Save' Button
  And I take a screenshot with the name "Ghost5\ID14 - 32"

