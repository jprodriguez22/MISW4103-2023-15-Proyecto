Feature: Crear un nuevo anuncio

@user1 @web
Scenario: #20 Como usuario de Ghost, creo un nuevo anuncio usando una biografía y la visualizo en la página principal
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a dynamic dataset
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 1 seconds
  When I go to the announcement settings with base_url "<G5HOME>"
  And I create a new random dynamic bio announcement
  And I wait for 1 seconds
  Then I navigate to page "<G5HOME>"
  And I wait for 2 seconds 