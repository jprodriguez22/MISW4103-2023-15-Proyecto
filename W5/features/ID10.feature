Feature: Cambiar tema visual del blog e ir al perfil del usuario

@user1 @web
Scenario: Cambiar tema visual del blog
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID10 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID10 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID10 - 2 - Ghost5"
  When I click on 'Change theme' Button
  And I take a screenshot with the name "ID10 - 3 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID10 - 4 - Ghost5"
  When I click on the 'User' Button
  And I take a screenshot with the name "ID10 - 5 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID10 - 6 - Ghost5"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "ID10 - 7 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID10 - 8 - Ghost5"
