Feature: Agregar una nota descriptiva a un miembro

@user1 @web
Scenario: #15 Como usuario de Ghost, añado una nota descriptiva a un miembro de mi pagina y la valido
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a priori dataset
  And I login into the page with priori random user and email
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I wait for 2 seconds
  And I select a member 
  And I wait for 2 seconds
  And I create a new descriptive note with priori random info
  And I wait for 2 seconds
  And I save the note
  And I wait for 2 seconds
  Then I navigate to the member with the priori random note