Feature: Crear un tag asignandolo a varios posts y usando filtro

@user1 @web
Scenario: #8 Como usuario de Ghost, creo un tag, lo signo a varios post y los filtro con este
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID08 - 0"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID08 - 1"
  When I go to the tags tab
  And I take a screenshot with the name "Ghost5\ID08 - 2"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID08 - 3"
  And I go to create a new tag
  And I take a screenshot with the name "Ghost5\ID08 - 4"
  And I insert a tag name "$string_3"
  And I take a screenshot with the name "Ghost5\ID08 - 5"
  And I save the tag name
  And I take a screenshot with the name "Ghost5\ID08 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID08 - 7"
  And I navigate to the posts list
  And I take a screenshot with the name "Ghost5\ID08 - 8"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID08 - 9"
  And I select a post to put a tag
  And I take a screenshot with the name "Ghost5\ID08 - 10"
  And I select to relate a tag for the post
  And I take a screenshot with the name "Ghost5\ID08 - 11"
  And I update the post
  And I take a screenshot with the name "Ghost5\ID08 - 12"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID08 - 13"
  And I return to the posts list
  And I take a screenshot with the name "Ghost5\ID08 - 14"
  And I select another post to put a tag
  And I take a screenshot with the name "Ghost5\ID08 - 15"
  And I select to relate a tag for the post
  And I take a screenshot with the name "Ghost5\ID08 - 16"
  And I update the post
  And I take a screenshot with the name "Ghost5\ID08 - 17"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID08 - 18"
  And I return to the posts list
  And I take a screenshot with the name "Ghost5\ID08 - 19"
  Then I apply the filters to see the new tag
  And I take a screenshot with the name "Ghost5\ID08 - 20"
