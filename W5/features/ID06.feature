Feature: Crear 2 miembros, asignarle un tag a cada uno y filtrar por tag

@user1 @web
Scenario: #6 Como usuario de Ghost, cambio el estado de un post pblicado a borrador 
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID06 - 0 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID06 - 1 - Ghost5"
  When I go to the members tab
  And I take a screenshot with the name "ID06 - 2 - Ghost5"
  And I add a name member "$string_1"
  And I take a screenshot with the name "ID06 - 3 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID06 - 4 - Ghost5"
  And I add a email member "$email_2"
  And I take a screenshot with the name "ID06 - 5 - Ghost5"
  And I set a tag for member "$string_3"
  And I take a screenshot with the name "ID06 - 6 - Ghost5"
  And I save the member with tag
  And I take a screenshot with the name "ID06 - 7 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID06 - 8 - Ghost5"
  And I go to the members tab
  And I take a screenshot with the name "ID06 - 9 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID06 - 10 - Ghost5"
  And I add a name member "$string_1"
  And I take a screenshot with the name "ID06 - 11 - Ghost5"
  And I add a email member "$email_1"
  And I take a screenshot with the name "ID06 - 12 - Ghost5"
  And I set a tag for member "$string_3"
  And I take a screenshot with the name "ID06 - 13 - Ghost5"
  And I save the member with tag
  And I take a screenshot with the name "ID06 - 14 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID06 - 15 - Ghost5"
  And I go to the members tab
  And I take a screenshot with the name "ID06 - 16 - Ghost5"
  Then I apply the filters to see the members
  And I take a screenshot with the name "ID06 - 17 - Ghost5"
