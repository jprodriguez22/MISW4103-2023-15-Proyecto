Feature: Cambiar el estado de un post a borrador

@user1 @web
Scenario: #11 Como usuario de Ghost, cambio el estado de un post publicado a borrador modificando su titulo
  Given I navigate to page "<GHOST5>"
  And I wait for 2 seconds
  And I load a priori dataset
  And I login into the page with priori random user and email
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  When I go to the posts tab
  And I select a post
  And I modify data from the post with priori random title
  And I wait for 2 seconds
  And I unpublish the post
  And I wait for 1 seconds
  And I return to the posts list
  And I wait for 1 seconds
  Then I validate the post isnt in the blog
