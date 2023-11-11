Feature: Crear un nuevo anuncio

@user1 @web
Scenario: #20 Como usuario de Ghost, creo un nuevo anuncio y lo visualizo en la página principal
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 1 seconds
  When I go to the announcement settings
  And I create a new announcement with the text "$string_1"
  And I wait for 1 seconds
  Then I navigate to page "http://localhost:2368"
  And I wait for 2 seconds 