Feature: Agregar una nota descriptiva a un miembro

@user1 @web
Scenario: #15 Como usuario de Ghost, añado una nota descriptiva a un miembro de mi pagina y la valido
  Given I navigate to the page "http://localhost:2368/ghost"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the members tab
  And I wait for 2 seconds
  And I wait for 2 seconds
  And I select a member 
  And I wait for 2 seconds
  And I add a descriptive note "$string_1"
  And I save the note
  And I wait for 2 seconds
  Then I validate the note is saved for the member
