Feature: Editar un tag


@user1 @web
Scenario: #9 Como usuario de Ghost, edito un tag asignado a varias publicaciones y valido
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID09 - 0"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID09 - 1"
  When I go to the tags tab
  And I take a screenshot with the name "Ghost5\ID09 - 2"
  And I select a tag
  And I take a screenshot with the name "Ghost5\ID09 - 3"
  And I modify a tag name "$string_2"
  And I take a screenshot with the name "Ghost5\ID09 - 4"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID09 - 5"
  And I save the tag name
  And I take a screenshot with the name "Ghost5\ID09 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID09 - 7"
  And I navigate to the posts list
  And I take a screenshot with the name "Ghost5\ID09 - 8"
  Then I apply the filters to tags and see the updated name
  And I take a screenshot with the name "Ghost5\ID09 - 9"
