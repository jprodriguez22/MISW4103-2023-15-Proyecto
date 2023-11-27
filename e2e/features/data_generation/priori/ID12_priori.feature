Feature: Crear nueva pagina

@user1 @web
Scenario: #12-priori: Como usuario de Ghost, fallo un login con datos aleatorios, accedo, creo una nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a priori dataset
  And I login into the page with priori random user and email
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with priori random name and bio
  And I wait for 6 seconds
  And I publish the new page
  And I wait for 1 seconds
  Then I navigate to the page with priori random name