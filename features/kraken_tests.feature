Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #12 Como usuario de Ghost, creo una nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with title "$name_1" and body "$string_1"
  And I wait for 4 seconds
  And I publish the new page
  And I wait for 1 seconds
  Then I navigate to the page with name "$$name_1"

@user2 @web
  Scenario: #13 Como usuario de Ghost, creo una nueva página, la agrego en la barra de navegación y accedo a ella por medio de su enlace
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with title "$name_1" and body "$string_1"
  And I wait for 4 seconds
  And I publish the new page
  And I return to the pages list
  Then I go to the navigations settings
  And I wait for 1 seconds
  And I add the page "$$name_1" to the website navigation
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368"
  And I wait for 2 seconds
  And I click on the navbar page with name "$$name_1"

@user3 @web
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