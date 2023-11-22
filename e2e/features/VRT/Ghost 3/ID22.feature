Feature: Borrar todo el contenido de la página

@user1 @web
Scenario: Borrar contenido
  Given I navigate to page "http://146.190.196.137:3001/ghost"
  And I take a screenshot with the name "Ghost3\ID22 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 1"
  And I login into the page 3 with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID22 - 2"
  When I click on the 'Labs tab' Button
  And I take a screenshot with the name "Ghost3\ID22 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 4"
  When I click on 'Delete all content' Button
  And I take a screenshot with the name "Ghost3\ID22 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 6"
  When I click on 'Confirm delete' Button
  And I take a screenshot with the name "Ghost3\ID22 - 7"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 8"
  Then I click on 'View Site Tab' Button
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID22 - 9"

