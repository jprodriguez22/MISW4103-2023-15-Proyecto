Feature: Editar un tag


@user1 @web
Scenario: #9 Como usuario de Ghost, edito un tag asignado a varias publicaciones y valido
  Given I navigate to the page "<GHOST5>"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the tags tab
  And I select a tag
  And I modify a tag name "$string_2"
  And I wait for 2 seconds
  And I save the tag name
  And I wait for 1 seconds
  And I navigate to the posts list
  Then I apply the filters to tags and see the updated name