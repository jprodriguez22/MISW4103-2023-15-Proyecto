Feature: Cambiar el título de la página

@user1 @web
Scenario: Como usuario de Ghost, quiero cambiar el título de mi blog y luego visualizarlo en la página de inicio
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID17 - 0 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID17 - 1 - Ghost5"
  When I go to the settings tab
  And I take a screenshot with the name "ID17 - 2 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID17 - 3 - Ghost5"
  And I select edit title settings
  And I take a screenshot with the name "ID17 - 4 - Ghost5"
  And I add one "$name_1" two "$name_2" and three "$name_3" names to the page title
  And I take a screenshot with the name "ID17 - 5 - Ghost5"
  Then I navigate to the page "http://146.190.196.137:2368"
  And I take a screenshot with the name "ID17 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID17 - 7 - Ghost5"
