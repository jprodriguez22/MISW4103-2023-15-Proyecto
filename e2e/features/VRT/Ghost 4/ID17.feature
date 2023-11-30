Feature: Cambiar el título de la página

@user1 @web
Scenario: Como usuario de Ghost, quiero cambiar el título de mi blog y luego visualizarlo en la página de inicio
  Given I navigate to the page "http://146.190.196.137:3015/ghost"
  And I take a screenshot with the name "Ghost4\ID17 - 0"
  And I login into the page 3 with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost4\ID17 - 1"
  When I click on 'Settings tab' Button
  And I take a screenshot with the name "Ghost4\ID17 - 2"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost4\ID17 - 3"
  And I click on 'Expand title' Button
  And I take a screenshot with the name "Ghost4\ID17 - 4"
  And I add a descriptive title to the page "$string_1"
  And I take a screenshot with the name "Ghost4\ID17 - 5"
  Then I click on 'Save title' Button
  And I take a screenshot with the name "Ghost4\ID17 - 6"
  And I wait for 1 seconds
