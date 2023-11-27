Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a post with priori dataset
  And I wait for 1 seconds
  And I login into the page with priori random user and email
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to page "<GHOST5>/#/posts"
  And I wait for 1 seconds
  And I create a post with priori random title and body
  And I wait for 2 seconds
  And I publish the new post
  And I wait for 1 seconds
  Then I navigate to the post with priori random name
  And I wait for 2 seconds
  And I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I navigate to page "<GHOST5>/#/posts"
  And I wait for 1 seconds
  And I select a post with priori random name
  And I wait for 2 seconds 
  And I modify data the a post created with priori random title2 and body2
  And I wait for 2 seconds
  And I update the post modified with priori random title2
  And I wait for 1 seconds
  And I navigate to page "<GHOST5>/#/posts"
  And I wait for 2 seconds