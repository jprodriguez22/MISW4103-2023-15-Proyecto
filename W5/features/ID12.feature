Feature: Crear nueva pagina

@user1 @web
Scenario: #12 Como usuario de Ghost, creo una nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID12 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID12 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID12 - 2 - Ghost5"
  When I go to the pages tab
  And I take a screenshot with the name "ID12 - 3 - Ghost5"
  And I create a new page with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "ID12 - 4 - Ghost5"
  And I wait for 6 seconds
  And I take a screenshot with the name "ID12 - 5 - Ghost5"
  And I publish the new page
  And I take a screenshot with the name "ID12 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID12 - 7 - Ghost5"
  Then I navigate to the page with name "$$name_1"
  And I take a screenshot with the name "ID12 - 8 - Ghost5"
