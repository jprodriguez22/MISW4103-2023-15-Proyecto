Feature: Cambiar el título de la página

@user1 @web
Scenario: Como usuario de Ghost, quiero cambiar el título de mi blog y luego visualizarlo en la página de inicio
  Given I navigate to the page "http://localhost:2368/ghost"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the settings tab
  And I wait for 2 seconds
  And I select edit title settings
  And I add one "$name_1" two "$name_2" and three "$name_3" names to the page title
  Then I navigate to the page "http://localhost:2368"
  And I wait for 1 seconds