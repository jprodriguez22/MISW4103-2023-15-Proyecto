Feature: Crear nueva pagina

@user1 @web
Scenario: #12-priori: Como usuario de Ghost, accedo, creo una nueva página con una biografía de un usuario en el título y navego hacia ella escribiendola en la URL
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a dynamic dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with dynamic random bio and name
  And I wait for 3 seconds
  And I publish the new page
  And I wait for 1 seconds
  Then I navigate to the page with dynamic random name
  And I wait for 3 seconds