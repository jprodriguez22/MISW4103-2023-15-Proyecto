Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL
  Given I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the posts tab
  And I create a post with title "$name_1" and body "$string_1"
  And I wait for 4 seconds
  And I publish the new post
  And I wait for 1 seconds
  Then I navigate to the post with name "$$name_1"
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost"
  And I wait for 1 seconds
  And I go to the posts tab
  And I wait for 1 seconds
  And I select a post created with name "$$name_1"
  And I wait for 2 seconds 
  And I modify data the a post created with title "$name_2" and body "$string_2"
  And I wait for 4 seconds
  And I update the post
  And I wait for 1 seconds
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 2 seconds