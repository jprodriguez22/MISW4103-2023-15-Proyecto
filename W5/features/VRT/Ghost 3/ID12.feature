Feature: Crear nueva pagina

@user1 @web
Scenario: #12 Como usuario de Ghost, creo una nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "http://146.190.196.137:3001/ghost"
  And I take a screenshot with the name "Ghost3\ID12 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID12 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID12 - 2"
  When I navigate to page "http://146.190.196.137:3001/ghost/#/pages"
  And I take a screenshot with the name "Ghost3\ID12 - 3"
  And I create a new page with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "Ghost3\ID12 - 4"
  And I wait for 6 seconds
  And I take a screenshot with the name "Ghost3\ID12 - 5"
  And I publish the new page
  And I take a screenshot with the name "Ghost3\ID12 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID12 - 7"
  Then I navigate to the page with name "$$name_1" and port "<G3PORT>"
  And I take a screenshot with the name "Ghost3\ID12 - 8"
