Feature: Agregar una nota descriptiva a un miembro

@user1 @web
Scenario: #15 Como usuario de Ghost, añado una nota descriptiva a un miembro de mi pagina y la valido
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID15 - 0 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID15 - 1 - Ghost5"
  When I go to the members tab
  And I take a screenshot with the name "ID15 - 2 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID15 - 3 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID15 - 4 - Ghost5"
  And I select a member 
  And I take a screenshot with the name "ID15 - 5 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID15 - 6 - Ghost5"
  And I add a descriptive note "$string_1"
  And I take a screenshot with the name "ID15 - 7 - Ghost5"
  And I save the note
  And I take a screenshot with the name "ID15 - 8 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID15 - 9 - Ghost5"
  Then I validate the note is saved for the member
  And I take a screenshot with the name "ID15 - 10 - Ghost5"

