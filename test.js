'use strict';
 /*
var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder().withCapabilities(
    WebDriver.Capabilities.firefox()
).build();
*/
var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 
driver.get('https://www.google.co.uk');
 // input.sendKeys('codechewing');
driver.findElement({name: 'q'}).then(function(input) {
  input.sendKeys('codechewing');
  input.sendKeys(WebDriver.Key.ENTER);
});
 
driver.sleep(1000);
 
//var elem = driver.findElement({id: 'ires'});
var elem = driver.findElement({id: 'rso'});

driver.findElement({css: '[href="http://www.codechewing.com/"]'}).then(function(webElement) {
    console.log('Element exists and continue');
    var link = elem.findElement({css: '[href="http://www.codechewing.com/"]'});
    link.getText().then(function(text) {
     console.log(text);
     var pageTitle = 'Code Chewing –HTML, PHP, CSS, Javascript tips';
     console.log('codechewing.com is the top result?');
     console.log(text.indexOf(pageTitle) !== -1);
   });
}, function(err) {   
    	console.log("Element not exist! Stop here.");
    }
);


driver.sleep(1000);
driver.quit();