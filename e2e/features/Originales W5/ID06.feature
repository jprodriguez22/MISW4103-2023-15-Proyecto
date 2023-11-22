Feature: Crear 2 miembros, asignarle un tag a cada uno y filtrar por tag

@user1 @web
Scenario: #6 Como usuario de Ghost, cambio el estado de un post pblicado a borrador 
  Given I navigate to the page "http://localhost:2368/ghost"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I add a name member "$string_1"
  And I wait for 1 seconds
  And I add a email member "$email_2"
  And I set a tag for member "$string_3"
  And I save the member with tag
  And I wait for 1 seconds
  And I go to the members tab
  And I wait for 1 seconds
  And I add a name member "$string_1"
  And I add a email member "$email_1"
  And I set a tag for member "$string_3"
  And I save the member with tag
  And I wait for 1 seconds
  And I go to the members tab
  Then I apply the filters to see the members