Feature: Crear nueva pagina

@user1 @web
Scenario: #12 Como usuario de Ghost, creo una nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a priori user dataset
  And I login into the page with a random user and email