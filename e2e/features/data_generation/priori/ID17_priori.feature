Feature: Cambiar el título de la página

@user1 @web
Scenario: Como usuario de Ghost, quiero cambiar el título de mi blog y luego visualizarlo en la página de inicio
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a priori dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the settings tab
  And I wait for 2 seconds
  And I select edit title settings
  And I add a random priori email to the page title
  Then I navigate to page "<G5HOME>"
  And I wait for 1 seconds