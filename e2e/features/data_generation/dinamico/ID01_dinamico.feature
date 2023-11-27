Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #01 Como usuario, creo un post, lo publico y navego hacia el escribiendo su URL
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a post with dynamic dataset
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to page "<GHOST5>/#/posts"
  And I wait for 1 seconds
  And I create a post with dynamic random title and body
  And I wait for 2 seconds
  And I publish the new post
  And I wait for 1 seconds
  Then I navigate to the post with dynamic random name
  And I wait for 2 seconds