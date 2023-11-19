Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #03 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo elimino y visualizo listado
  Given I navigate to page "http://146.190.196.137:3001/ghost"
  And I take a screenshot with the name "Ghost3\ID01 - 0"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID01 - 1"
  And I login Ghost3 into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "Ghost3\ID01 - 2"
  And I wait for 3 seconds
  When I navigate to page "http://146.190.196.137:3001/ghost/#/posts"
  And I take a screenshot with the name "Ghost3\ID01 - 3"
  And I wait for 2 seconds
  And I navigate to page "http://146.190.196.137:3001/ghost/#/editor/post"
  And I wait for 2 seconds
  And I create Ghost3 a post with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "Ghost3\ID01 - 4"
  And I wait for 4 seconds
  And I take a screenshot with the name "Ghost3\ID01 - 5"
  And I publish Ghost3 the new post
  And I take a screenshot with the name "Ghost3\ID01 - 6"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID01 - 7"
  Then I navigate to the post with name "$$name_1" and port "<G3PORT>"
  And I take a screenshot with the name "Ghost3\ID01 - 8"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID01 - 9"
  And I navigate to page "http://146.190.196.137:3001/ghost"
  And I take a screenshot with the name "Ghost3\ID03 - 10"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID03 - 11"
  And I navigate to page "http://146.190.196.137:3001/ghost/#/posts"
  And I take a screenshot with the name "Ghost3\ID03 - 12"
  And I wait for 1 seconds
  And I take a screenshot with the name "Ghost3\ID03 - 13"
  And I delete Ghost3 the post created with name "$$name_1"
  And I take a screenshot with the name "Ghost3\ID03 - 14"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID03 - 15"
  And I navigate to page "http://146.190.196.137:3001/ghost/#/posts"
  And I take a screenshot with the name "Ghost3\ID03 - 16"
  And I wait for 2 seconds
  And I take a screenshot with the name "Ghost3\ID03 - 17"
