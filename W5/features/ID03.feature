Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #03 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo elimino y visualizo listado
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID03 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID03 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID03 - 2 - Ghost5"
  When I go to the posts tab
  And I take a screenshot with the name "ID03 - 3 - Ghost5"
  And I create a post with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "ID03 - 4 - Ghost5"
  And I wait for 4 seconds
  And I take a screenshot with the name "ID03 - 5 - Ghost5"
  And I publish the new post
  And I take a screenshot with the name "ID03 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID03 - 7 - Ghost5"
  Then I navigate to the post with name "$$name_1"
  And I take a screenshot with the name "ID03 - 8 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID03 - 9 - Ghost5"
  And I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID03 - 10 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID03 - 11 - Ghost5"
  And I go to the posts tab
  And I take a screenshot with the name "ID03 - 12 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID03 - 13 - Ghost5"
  And I delete the post created with name "$$name_1"
  And I take a screenshot with the name "ID03 - 14 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID03 - 15 - Ghost5"
  And I navigate to page "http://146.190.196.137:2368/ghost/#/posts"
  And I take a screenshot with the name "ID03 - 16 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID03 - 17 - Ghost5"
