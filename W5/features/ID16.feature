Feature: Eliminar pagina

@user1 @web
Scenario: #16 Como usuario de Ghost, creo una nueva página, accedo a ella por medio de su URL y la elimino
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID16 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID16 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID16 - 2"
  When I go to the pages tab
  And I take a screenshot with the name "Ghost5\ID16 - 3"
  And I create a new page with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "Ghost5\ID16 - 4"
  And I wait for 6 seconds
  And I take a screenshot with the name "Ghost5\ID16 - 5"
  And I publish the new page
  And I take a screenshot with the name "Ghost5\ID16 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID16 - 7"
  Then I navigate to the page with name "$$name_1" and port "<G5PORT>"
  And I take a screenshot with the name "Ghost5\ID16 - 8"
  And I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID16 - 9"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID16 - 10"
  And I go to the pages tab
  And I take a screenshot with the name "Ghost5\ID16 - 11"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID16 - 12"
  And I delete the post with name "$$name_1"
  And I take a screenshot with the name "Ghost5\ID16 - 13"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID16 - 14"
