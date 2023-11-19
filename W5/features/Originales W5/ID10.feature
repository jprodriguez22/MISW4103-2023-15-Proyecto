Feature: Cambiar tema visual del blog e ir al perfil del usuario

@user1 @web
Scenario: Cambiar tema visual del blog
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I click on 'Change theme' Button
  And I wait for 2 seconds
  When I click on the 'User' Button
  And I wait for 2 seconds
  When I click on 'Your Profile' Button
  And I wait for 2 seconds