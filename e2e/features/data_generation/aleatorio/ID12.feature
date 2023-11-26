Feature: Crear nueva pagina

@user1 @web
Scenario: #12 Como usuario de Ghost, creo una nueva página y navego hacia ella escribiendola en la URL
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the pages tab
  And I create a new page with title "$name_1" and body "$string_1"
  And I wait for 6 seconds
  And I publish the new page
  And I wait for 1 seconds
  Then I navigate to the page with name "$$name_1" and port "<G5PORT>"