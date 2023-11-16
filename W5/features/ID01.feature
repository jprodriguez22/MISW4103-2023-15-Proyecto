Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #01 Como usuario, creo un post, lo publico y navego hacia el escribiendo su URL
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID01 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID01 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID01 - 2 - Ghost5"
  When I go to the posts tab
  And I take a screenshot with the name "ID01 - 3 - Ghost5"
  And I create a post with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "ID01 - 4 - Ghost5"
  And I wait for 4 seconds
  And I take a screenshot with the name "ID01 - 5 - Ghost5"
  And I publish the new post
  And I take a screenshot with the name "ID01 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID01 - 7 - Ghost5"
  Then I navigate to the post with name "$$name_1"
  And I take a screenshot with the name "ID01 - 8 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID01 - 9 - Ghost5"
