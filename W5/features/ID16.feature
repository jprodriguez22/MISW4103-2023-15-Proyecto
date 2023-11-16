Feature: Eliminar pagina

@user1 @web
Scenario: #16 Como usuario de Ghost, creo una nueva página, accedo a ella por medio de su URL y la elimino
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID16 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID16 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID16 - 2 - Ghost5"
  When I go to the pages tab
  And I take a screenshot with the name "ID16 - 3 - Ghost5"
  And I create a new page with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "ID16 - 4 - Ghost5"
  And I wait for 6 seconds
  And I take a screenshot with the name "ID16 - 5 - Ghost5"
  And I publish the new page
  And I take a screenshot with the name "ID16 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID16 - 7 - Ghost5"
  Then I navigate to the page with name "$$name_1"
  And I take a screenshot with the name "ID16 - 8 - Ghost5"
  And I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID16 - 9 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID16 - 10 - Ghost5"
  And I go to the pages tab
  And I take a screenshot with the name "ID16 - 11 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID16 - 12 - Ghost5"
  And I delete the post with name "$$name_1"
  And I take a screenshot with the name "ID16 - 13 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID16 - 14 - Ghost5"
