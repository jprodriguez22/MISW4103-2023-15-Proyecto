Feature: Crear un nuevo anuncio

@user1 @web
Scenario: #20 Como usuario de Ghost, creo un nuevo anuncio y lo visualizo en la página principal
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID20 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID20 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID20 - 2 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID20 - 3 - Ghost5"
  When I go to the announcement settings
  And I take a screenshot with the name "ID20 - 4 - Ghost5"
  And I create a new announcement with the text "$string_1"
  And I take a screenshot with the name "ID20 - 5 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID20 - 6 - Ghost5"
  Then I navigate to page "http://146.190.196.137:2368"
  And I take a screenshot with the name "ID20 - 7 - Ghost5"
  And I wait for 2 seconds 
  And I take a screenshot with the name "ID20 - 8 - Ghost5"
