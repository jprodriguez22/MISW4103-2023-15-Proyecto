Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #02 Como usuario, creo un post, lo publico, navego hacia el escribiendo su URL, lo edito, lo actualizo y navego hacia el escribiendo su URL
  Given I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID02 - 0 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID02 - 1 - Ghost5"
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I take a screenshot with the name "ID02 - 2 - Ghost5"
  When I go to the posts tab
  And I take a screenshot with the name "ID02 - 3 - Ghost5"
  And I create a post with title "$name_1" and body "$string_1"
  And I take a screenshot with the name "ID02 - 4 - Ghost5"
  And I wait for 4 seconds
  And I take a screenshot with the name "ID02 - 5 - Ghost5"
  And I publish the new post
  And I take a screenshot with the name "ID02 - 6 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID02 - 7 - Ghost5"
  Then I navigate to the post with name "$$name_1"
  And I take a screenshot with the name "ID02 - 8 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID02 - 9 - Ghost5"
  And I navigate to page "http://146.190.196.137:2368/ghost"
  And I take a screenshot with the name "ID02 - 10 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID02 - 11 - Ghost5"
  And I go to the posts tab
  And I take a screenshot with the name "ID02 - 12 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID02 - 13 - Ghost5"
  And I select a post created with name "$$name_1"
  And I take a screenshot with the name "ID02 - 14 - Ghost5"
  And I wait for 2 seconds 
  And I take a screenshot with the name "ID02 - 15 - Ghost5"
  And I modify data the a post created with title "$name_2" and body "$string_2"
  And I take a screenshot with the name "ID02 - 16 - Ghost5"
  And I wait for 4 seconds
  And I take a screenshot with the name "ID02 - 17 - Ghost5"
  And I update the post
  And I take a screenshot with the name "ID02 - 18 - Ghost5"
  And I wait for 1 seconds
  And I take a screenshot with the name "ID02 - 19 - Ghost5"
  And I navigate to page "http://146.190.196.137:2368/ghost/#/posts"
  And I take a screenshot with the name "ID02 - 20 - Ghost5"
  And I wait for 2 seconds
  And I take a screenshot with the name "ID02 - 21 - Ghost5"
