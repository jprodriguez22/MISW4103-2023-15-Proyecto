Feature: Crear un tag asignandolo a varios posts y usando filtro

@user1 @web
Scenario: #8 Como usuario de Ghost, creo un tag, lo signo a varios post y los filtro con este
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID08 - 0 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID08 - 1 - Ghost5"
  When I go to the tags tab
  And I take a screenshot with the name "ID08 - 2 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID08 - 3 - Ghost5"
  And I go to create a new tag
  And I take a screenshot with the name "ID08 - 4 - Ghost5"
  And I insert a tag name "$string_3"
  And I take a screenshot with the name "ID08 - 5 - Ghost5"
  And I save the tag name
  And I take a screenshot with the name "ID08 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID08 - 7 - Ghost5"
  And I navigate to the posts list
  And I take a screenshot with the name "ID08 - 8 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID08 - 9 - Ghost5"
  And I select a post to put a tag
  And I take a screenshot with the name "ID08 - 10 - Ghost5"
  And I select to relate a tag for the post
  And I take a screenshot with the name "ID08 - 11 - Ghost5"
  And I update the post
  And I take a screenshot with the name "ID08 - 12 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID08 - 13 - Ghost5"
  And I return to the posts list
  And I take a screenshot with the name "ID08 - 14 - Ghost5"
  And I select another post to put a tag
  And I take a screenshot with the name "ID08 - 15 - Ghost5"
  And I select to relate a tag for the post
  And I take a screenshot with the name "ID08 - 16 - Ghost5"
  And I update the post
  And I take a screenshot with the name "ID08 - 17 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID08 - 18 - Ghost5"
  And I return to the posts list
  And I take a screenshot with the name "ID08 - 19 - Ghost5"
  Then I apply the filters to see the new tag
  And I take a screenshot with the name "ID08 - 20 - Ghost5"
