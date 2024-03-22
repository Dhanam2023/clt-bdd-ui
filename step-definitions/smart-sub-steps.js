const helpers = require("../runtime/helpers");

module.exports = function () {
    this.Given(/^I am on "([^"]*)" website$/, function(objectKey) {
        //(Given('I am on SmartSubPortal website', function()
        console.log('The objectKey is: ' + page.smartsub[objectKey])
        //console.log("The objectKey is: %d ", page.common[objectKey])
        //console.log("Object Key of given is %d", page.smartsub.elements[objectKey])
        //return helpers.loadpage(page.smart-sub[objectKey]);
        return helpers.loadPage(page.smartsub.SmartSubPortal);
    });

    this.When(/^I click on "([^"]*)"$/ , function(objectKey) {
        console.log("Object Key of click is " + page.smartsub[objectKey])
        return page.smartsub.clickElement(objectKey);
    });
    
    this.Then(/^I should see "([^"]*)"$/, function(objectKey)  {
        console.log("Object Key of seeing is " + page.smartsub[objectKey])
        return page.smartsub.elementExists(objectKey);
    });

    this.When(/^I enter a "([^"]*)" as "([^"]*)"$/, function(inputname,inputvalue) {
        //console.log("Object Key is %d", objectKey)
        return page.smartsub.inputElement(inputname,inputvalue);
    });


   // this.When(/^I enter "([^"]*)" as "([^"]*)"$/, function(inputname, inputvalue) { // VehiclesButton, InventoryLink
     //   return page.common.inputElement(inputname, inputvalue)
   // })

  

}
