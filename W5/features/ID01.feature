Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #01 Como usuario, creo un post, lo publico y navego hacia el escribiendo su URL
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "Ghost5\ID01 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID01 - 1"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost5\ID01 - 2"
  When I go to the posts tab
  And I take a screenshot with the name "Ghost5\ID01 - 3"
  And I create a post with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "Ghost5\ID01 - 4"
  And I wait for 4 seconds
  And I take a screenshot with the name "Ghost5\ID01 - 5"
  And I publish the new post
  And I take a screenshot with the name "Ghost5\ID01 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost5\ID01 - 7"
  Then I navigate to the post with name "$$name_1" and port "<G5PORT>"
  And I take a screenshot with the name "Ghost5\ID01 - 8"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost5\ID01 - 9"
