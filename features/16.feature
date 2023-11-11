Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #16 Como usuario de Ghost, creo una nueva página, accedo a ella por medio de su URL y la elimino
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with title "$name_1" and body "$string_1"
  And I wait for 4 seconds
  And I publish the new page
  And I wait for 1 seconds
  Then I navigate to the page with name "$$name_1"
  And I navigate to page "http://localhost:2368/ghost"
  And I go to the pages tab
  And I delete the post with name "$$name_1"