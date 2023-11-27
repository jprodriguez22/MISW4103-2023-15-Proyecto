Feature: Adicionar Bio al perfil de un usuario

@user1 @web
Scenario: Adicionar Bio al perfil
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID21 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID21 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID21 - 2"
  When I click on the 'User' Button
  And I take a screenshot with the name "Ghost5\ID21 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID21 - 4"
  When I click on 'Your Profile' Button
  And I take a screenshot with the name "Ghost5\ID21 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID21 - 6"
  And I add a descriptive bio 5 "$string_1"
  And I take a screenshot with the name "Ghost5\ID21 - 7"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID21 - 8"
  And I click on 'Save Bio 5' Button
  And I take a screenshot with the name "Ghost5\ID21 - 9"
  And I wait for 1 seconds
  And I navigate to the dashboard page "http://146.190.196.137:2368/ghost/#/dashboard"
  And I take a screenshot with the name "Ghost5\ID21 - 10"
  And I wait for 1 seconds
  When I click on the 'User' Button
  And I take a screenshot with the name "Ghost5\ID21 - 11"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID21 - 12"
  Then I click on 'Your Profile' Button

