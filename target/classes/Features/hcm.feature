Feature: Hcm Login

Scenario Outline: User Should be able to login Successfully

Given User is already in HCM Login Page
When User enters "<username>" and "<password>"
Then Login button should be clicked
Then Dashboard page should be displayed
Then PageURL Should be Matched with Expected


Examples: 

 | username | password	|
 | 1006		| Kishan@29	|
 | 2000		| Kishan@29	|
 | 1000		| Kishan@29	|