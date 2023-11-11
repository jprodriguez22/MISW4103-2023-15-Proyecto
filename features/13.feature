Feature: Pruebas funcionales en Ghost

@user1 @web
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