Feature: Agregar pagina a navegacion

@user1 @web
Scenario: #13 Como usuario de Ghost, creo una nueva página, la agrego en la barra de navegación y accedo a ella por medio de su enlace
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID13 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID13 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID13 - 2"
  When I go to the pages tab
  And I take a screenshot with the name "Ghost5\ID13 - 3"
  And I create a new page with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "Ghost5\ID13 - 4"
  And I wait for 6 seconds
  And I take a screenshot with the name "Ghost5\ID13 - 5"
  And I publish the new page
  And I take a screenshot with the name "Ghost5\ID13 - 6"
  And I return to the pages list
  And I take a screenshot with the name "Ghost5\ID13 - 7"
  Then I go to the navigations settings with base_url "http://146.190.196.137:2368"
  And I take a screenshot with the name "Ghost5\ID13 - 8"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID13 - 9"
  And I add the page "$$name_1" to the website navigation
  And I take a screenshot with the name "Ghost5\ID13 - 10"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID13 - 11"
  And I navigate to page "http://146.190.196.137:2368"
  And I take a screenshot with the name "Ghost5\ID13 - 12"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID13 - 13"
  And I click on the navbar page with name "$$name_1"
  And I take a screenshot with the name "Ghost5\ID13 - 14"
