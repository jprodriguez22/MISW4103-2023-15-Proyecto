Feature: Crear 2 miembros, asignarle un tag a cada uno y filtrar por tag

@user1 @web
Scenario: #6 Como usuario de Ghost, cambio el estado de un post pblicado a borrador 
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a priori dataset
  And I login into the page with priori random user and email
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I create a member with priori random name
  And I wait for 1 seconds
  And I create a member with priori random email
  And I create a member with priori random tag
  And I save the member with tag
  And I wait for 1 seconds
  And I go to the members tab
  And I wait for 1 seconds
  And I create a member with priori random name
  And I create a member with priori random email
  And I create a member with priori random tag
  And I save the member with tag
  And I wait for 1 seconds
  And I go to the members tab
  Then I apply the filters to see the members