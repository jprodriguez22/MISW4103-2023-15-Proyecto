Feature: Cambiar tema visual del blog e ir al perfil del usuario

@user1 @web
Scenario: Cambiar tema visual del blog
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID10 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID10 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID10 - 2"
  When I click on 'Change theme' Button
  And I take a screenshot with the name "Ghost5\ID10 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID10 - 4"
  When I click on the 'User' Button
  And I take a screenshot with the name "Ghost5\ID10 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID10 - 6"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "Ghost5\ID10 - 7"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID10 - 8"
