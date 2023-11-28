Feature: Pruebas funcionales en Ghost

@user1 @web
Scenario: #04 Como usuario, creo un miembro y navego hacia el escribiendo su URL
  Given I navigate to page "<GHOST5>"
  And I wait for 1 seconds
  And I load a member with priori dataset
  And I wait for 1 seconds
  And I login into the page with priori random user and email
  And I wait for 1 seconds
  And I login into the page with my email "<LOGINEMAIL>" and password "<LOGINPASSWORD>"
  And I wait for 2 seconds
  When I navigate to page "http://localhost:2368/ghost/#/members"
  And I wait for 1 seconds
  And I create a member with priori random name and email
  And I wait for 2 seconds