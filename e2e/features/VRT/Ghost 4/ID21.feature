Feature: Adicionar Bio al perfil de un usuario

@user1 @web
Scenario: Adicionar Bio al perfil
  Given I navigate to page "http://146.190.196.137:3015/ghost"
  And I take a screenshot with the name "Ghost4\ID21 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost4\ID21 - 1"
  And I login into the page 3 with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost4\ID21 - 2"
  When I click on the 'Ghost 3 User' Button
  And I take a screenshot with the name "Ghost4\ID21 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost4\ID21 - 4"
  When I click on 'Ghost 3 Your Profile' Button
  And I take a screenshot with the name "Ghost4\ID21 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost4\ID21 - 6"
  And I add a descriptive bio "$string_1"
  And I take a screenshot with the name "Ghost4\ID21 - 7"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost4\ID21 - 8"
  And I click on 'Save Bio' Button
  And I take a screenshot with the name "Ghost4\ID21 - 9"

