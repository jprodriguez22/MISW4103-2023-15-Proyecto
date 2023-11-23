Feature: Agregar pagina a navegacion

@user1 @web
Scenario: #13 Como usuario de Ghost, creo una nueva página, la agrego en la barra de navegación y accedo a ella por medio de su enlace
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a priori user dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with priori random title and body
  And I wait for 6 seconds
  And I publish the new page
  And I return to the pages list
  Then I go to the navigations settings with base_url "<G5HOME>"
  And I wait for 1 seconds
  And I add the page "$$name_1" to the website navigation
  And I wait for 2 seconds
  And I navigate to page "<G5HOME>"
  And I wait for 2 seconds
  And I click on the navbar page with name "$$name_1"