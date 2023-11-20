Feature: Borrar todo el contenido de la página

@user1 @web
Scenario: Borrar contenido
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID22 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID22 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 2"
  When I go to the settings tab
  And I take a screenshot with the name "Ghost3\ID22 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 4"
  When I go to the lab tab
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID22 - 5"
  When I click on 'Open 5' Button
  And I take a screenshot with the name "Ghost5\ID22 - 6"
  And I wait for 2 seconds
  When I click on 'Delete all content 5' Button
  And I take a screenshot with the name "Ghost5\ID22 - 7"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID22 - 8"
  When I click on 'Confirm delete 5' Button
  And I take a screenshot with the name "Ghost5\ID22 - 9"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID22 - 10"
  Then I navigate to the home page "http://146.190.196.137:2368/ghost/#/dashboard"
  And I wait for 3 seconds
  And I take a screenshot with the name "Ghost5\ID22 - 11"

