Feature: Agregar pagina a navegacion

@user1 @web
Scenario: #13 Como usuario de Ghost, creo una nueva página, la agrego en la barra de navegación y accedo a ella por medio de su enlace
  Given I navigate to page "http://146.190.196.137:3001/ghost"
  And I take a screenshot with the name "Ghost3\ID13 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID13 - 1"
  And I login Ghost3 into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID13 - 2"
  When I navigate to page "http://146.190.196.137:3001/ghost/#/pages"
  And I take a screenshot with the name "Ghost3\ID13 - 3"
  And I create Ghost3 a new page with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "Ghost3\ID13 - 4"
  And I wait for 6 seconds
  And I take a screenshot with the name "Ghost3\ID13 - 5"
  And I publish Ghost3 the new page
  And I take a screenshot with the name "Ghost3\ID13 - 6"
  And I navigate to page "http://146.190.196.137:3001/ghost/#/pages"
  And I take a screenshot with the name "Ghost3\ID13 - 7"
  Then I navigate to page "http://146.190.196.137:3001/ghost/#/settings/design"
  And I take a screenshot with the name "Ghost3\ID13 - 8"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID13 - 9"
  And I add Ghost3 the page "$$name_1" to the website navigation
  And I take a screenshot with the name "Ghost3\ID13 - 10"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID13 - 11"
  And I navigate to page "http://146.190.196.137:3001"
  And I take a screenshot with the name "Ghost3\ID13 - 12"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID13 - 13"
  And I navigate to the page with name "$$name_1" and port "<G3PORT>"
  And I take a screenshot with the name "Ghost3\ID13 - 14"
