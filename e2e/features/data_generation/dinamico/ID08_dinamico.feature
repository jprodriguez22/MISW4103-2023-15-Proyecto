Feature: Crear un tag asignandolo a varios posts y usando filtro

@user1 @web
Scenario: #8 Como usuario de Ghost, creo un tag, lo signo a varios post y los filtro con este
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a dynamic dataset
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the tags tab
  And I wait for 1 seconds
  And I go to create a new tag
  And I create a new tag with dynamic random name
  And I wait for 2 seconds
  And I save the tag name
  And I wait for 1 seconds
  And I navigate to the posts list
  And I wait for 1 seconds
  And I select a post to put a tag
  And I select to relate a tag for the post
  And I update the post
  And I wait for 1 seconds
  And I return to the posts list
  And I select another post to put a tag
  And I select to relate a tag for the post
  And I update the post
  And I wait for 1 seconds
  And I return to the posts list
  Then I apply the filters to see the new tag