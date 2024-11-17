$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFiles/Suppiler.feature");
formatter.feature({
  "name": "",
  "description": "As Admin user i want user ERP module",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003csuppliername\u003e\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003caddress\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccity\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccountry\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccperson\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cpnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmail\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cnote\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "suppliername",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "note"
      ]
    },
    {
      "cells": [
        "Testing1555",
        "Ameerpet1",
        "Hydearbad",
        "India",
        "Qedgetech1",
        "6401648204",
        "test@gmail.com",
        "9482759385",
        "iam a new Supplier"
      ]
    },
    {
      "cells": [
        "Testing4888",
        "Ameerpet15",
        "Hydearbad",
        "India",
        "Qedgetech5",
        "7591648294",
        "test@gmail.com",
        "9439154128",
        "iam a new Supplier"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: .\\PropertyFiles\\Environment.properties (The system cannot find the file specified)\r\n\tat java.base/java.io.FileInputStream.open0(Native Method)\r\n\tat java.base/java.io.FileInputStream.open(FileInputStream.java:213)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:152)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:106)\r\n\tat commonFunctions.FunctionLibrary.startBrowser(FunctionLibrary.java:32)\r\n\tat stepDefination.ERPSteps.launch_browser_as(ERPSteps.java:14)\r\n\tat ✽.Launch browser as(file:FeatureFiles/Suppiler.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Testing1555\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Ameerpet1\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Hydearbad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Qedgetech1\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"6401648204\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"9482759385\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"iam a new Supplier\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_SupplierNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "error_message": "java.io.FileNotFoundException: .\\PropertyFiles\\Environment.properties (The system cannot find the file specified)\r\n\tat java.base/java.io.FileInputStream.open0(Native Method)\r\n\tat java.base/java.io.FileInputStream.open(FileInputStream.java:213)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:152)\r\n\tat java.base/java.io.FileInputStream.\u003cinit\u003e(FileInputStream.java:106)\r\n\tat commonFunctions.FunctionLibrary.startBrowser(FunctionLibrary.java:32)\r\n\tat stepDefination.ERPSteps.launch_browser_as(ERPSteps.java:14)\r\n\tat ✽.Launch browser as(file:FeatureFiles/Suppiler.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Testing4888\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Ameerpet15\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Hydearbad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"Qedgetech5\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"7591648294\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"9439154128\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter in \"iam a new Supplier\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_SupplierNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});