$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Cucumber/src/main/java/Features/hcm.feature");
formatter.feature({
  "line": 1,
  "name": "Hcm Login",
  "description": "",
  "id": "hcm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Should be able to login Successfully",
  "description": "",
  "id": "hcm-login;user-should-be-able-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already in HCM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should be clicked",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Dashboard page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "PageURL Should be Matched with Expected",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "hcm-login;user-should-be-able-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "hcm-login;user-should-be-able-to-login-successfully;;1"
    },
    {
      "cells": [
        "1006",
        "Kishan@29"
      ],
      "line": 15,
      "id": "hcm-login;user-should-be-able-to-login-successfully;;2"
    },
    {
      "cells": [
        "2000",
        "Kishan@29"
      ],
      "line": 16,
      "id": "hcm-login;user-should-be-able-to-login-successfully;;3"
    },
    {
      "cells": [
        "1000",
        "Kishan@29"
      ],
      "line": 17,
      "id": "hcm-login;user-should-be-able-to-login-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "User Should be able to login Successfully",
  "description": "",
  "id": "hcm-login;user-should-be-able-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already in HCM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"1006\" and \"Kishan@29\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should be clicked",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Dashboard page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "PageURL Should be Matched with Expected",
  "keyword": "Then "
});
formatter.match({
  "location": "HCM_Login.user_is_already_in_HCM_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1006",
      "offset": 13
    },
    {
      "val": "Kishan@29",
      "offset": 24
    }
  ],
  "location": "HCM_Login.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.login_button_should_be_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.dashboard_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.pageurl_Should_be_Matched_with_Expected()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "User Should be able to login Successfully",
  "description": "",
  "id": "hcm-login;user-should-be-able-to-login-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already in HCM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"2000\" and \"Kishan@29\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should be clicked",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Dashboard page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "PageURL Should be Matched with Expected",
  "keyword": "Then "
});
formatter.match({
  "location": "HCM_Login.user_is_already_in_HCM_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 13
    },
    {
      "val": "Kishan@29",
      "offset": 24
    }
  ],
  "location": "HCM_Login.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.login_button_should_be_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.dashboard_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.pageurl_Should_be_Matched_with_Expected()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "User Should be able to login Successfully",
  "description": "",
  "id": "hcm-login;user-should-be-able-to-login-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already in HCM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"1000\" and \"Kishan@29\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should be clicked",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Dashboard page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "PageURL Should be Matched with Expected",
  "keyword": "Then "
});
formatter.match({
  "location": "HCM_Login.user_is_already_in_HCM_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 13
    },
    {
      "val": "Kishan@29",
      "offset": 24
    }
  ],
  "location": "HCM_Login.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.login_button_should_be_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.dashboard_page_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HCM_Login.pageurl_Should_be_Matched_with_Expected()"
});
formatter.result({
  "status": "skipped"
});
});