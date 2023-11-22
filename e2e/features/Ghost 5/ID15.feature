Feature: Agregar una nota descriptiva a un miembro

@user1 @web
Scenario: #15 Como usuario de Ghost, añado una nota descriptiva a un miembro de mi pagina y la valido
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID15 - 0"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID15 - 1"
  When I go to the members tab
  And I take a screenshot with the name "Ghost5\ID15 - 2"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID15 - 3"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID15 - 4"
  And I select a member 
  And I take a screenshot with the name "Ghost5\ID15 - 5"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID15 - 6"
  And I add a descriptive note "$string_1"
  And I take a screenshot with the name "Ghost5\ID15 - 7"
  And I save the note
  And I take a screenshot with the name "Ghost5\ID15 - 8"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID15 - 9"
  Then I validate the note is saved for the member
  And I take a screenshot with the name "Ghost5\ID15 - 10"

