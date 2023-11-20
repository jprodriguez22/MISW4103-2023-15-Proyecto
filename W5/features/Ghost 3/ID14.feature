Feature: Editar la contraseña del usuario loggeado y probar el inicio de sesión

@user1 @web
Scenario: Cambiar la contraseña del usuario y probar
  Given I navigate to the page "http://146.190.196.137:3001/ghost"
  And I take a screenshot with the name "Ghost3\ID14 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 1"
  And I login into the page 3 with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID14 - 2"
  When I click on the 'Ghost 3 User' Button
  And I take a screenshot with the name "Ghost3\ID14 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 4"
  When I click on 'Ghost 3 Your Profile' Button
  And I take a screenshot with the name "Ghost3\ID14 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 7"
  When I write my current password 3 "<LOGINPASSWORD>" and my new password "<NEWPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID14 - 8"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 9"
  When I click on 'Change Password red 3' Button
  And I take a screenshot with the name "Ghost3\ID14 - 10"
  And I wait for 5 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 11"
   And I wait for 10 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 12"
  When I click on the 'Ghost 3 User' Button
  And I take a screenshot with the name "Ghost3\ID14 - 13"
  And I wait for 5 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 14"
  When I click on 'Sign Out' Button
  And I take a screenshot with the name "Ghost3\ID14 - 15"
  And I wait for 3 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 16"
  And I login into the page 3 with my email "<LOGINEMAIL>" and password "<NEWPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID14 - 17"
  When I click on the 'Ghost 3 User' Button
  And I take a screenshot with the name "Ghost3\ID14 - 18"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 19"
  When I click on 'Ghost 3 Your Profile' Button
  And I take a screenshot with the name "Ghost3\ID14 - 20"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 21"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 22"
  When I write my current password 3 "<NEWPASSWORD>" and my new password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID14 - 23"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID14 - 24"
  When I click on 'Change Password red 3' Button
  And I take a screenshot with the name "Ghost3\ID14 - 25"
  And I wait for 2 seconds


