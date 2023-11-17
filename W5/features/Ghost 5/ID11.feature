Feature: Cambiar el estado de un post a borrador

@user1 @web
Scenario: #11 Como usuario de Ghost, cambio el estado de un post pblicado a borrador 
  Given I navigate to the page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID11 - 0"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID11 - 1"
  When I go to the posts tab
  And I take a screenshot with the name "Ghost5\ID11 - 2"
  And I select a post
  And I take a screenshot with the name "Ghost5\ID11 - 3"
  And I unpublish the post
  And I take a screenshot with the name "Ghost5\ID11 - 4"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID11 - 5"
  And I return to the posts list
  And I take a screenshot with the name "Ghost5\ID11 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID11 - 7"
  Then I validate the post isnt in the blog
  And I take a screenshot with the name "Ghost5\ID11 - 8"


