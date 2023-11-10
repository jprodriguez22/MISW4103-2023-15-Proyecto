Feature: Crear una nueva página

@user1 @web
Scenario: #12 Como usuario de Ghost, creo uan nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with title "$name_1" and body "$string_1"
  And I wait for 2 seconds
  And I publish the new page
  Then I navigate to the page with name "$$name_1"