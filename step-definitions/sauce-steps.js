//const { Driver } = require("selenium-webdriver/chrome");
const { Builder } = require("selenium-webdriver");
const helpers = require("../runtime/helpers");

module.exports = function() {
    this.Given(/^I log into "([^"]*)" website as "([^"]*)","([^"]*)" and "([^"]*)"$/, 
    async function(Portal, inputname, inputpass, login) {
        helpers.loadPage(page.sauce[Portal]);
        await driver.sleep(3000);
        await page.sauce.inputElement('userName', inputname);
        await page.sauce.inputElement('passWord', inputpass);
        await page.sauce.clickElement(login);
    });
    this.Given('I am on the products page', async function() {
        //driver = await new Builder().forBrowser('chrome').build();
        //await driver.get('https://www.saucedemo.com/inventory.html');
        await helpers.loadPage('https://www.saucedemo.com/inventory.html');
        return
    });
    this.Then(/^I should see "([^"]*)" page$/ ,async function(objectKey){
        return page.sauce.elementExists(objectKey);
    });
    this.When(/^I click on "([^"]*)" or "([^"]*)" in products page$/, async function(image,name){
        return page.sauce.clickElement(name);
    });
    this.When(/^I click the Add_to_Cart button$/, async function(DataTable) {
        const rows = DataTable.rows();
        for( var i=0; i<rows.length; i++){
            var item_name = rows[i];
            await page.sauce.clickElement(item_name);
        };
        return;
    });
    this.When(/^I click the "([^"]*)"$/, async function(objectKey){
        await page.sauce.clickElement(objectKey);
    });
    this.Then(/^The shopping cart should display all the items$/, async function(){
        await page.sauce.elementExists("shopping_cart_header");
    });
    this.When(/^I enter "([^"]*)" as "([^"]*)"$/, async function(name,value){
        await page.sauce.inputElement(name,value);
    });


}
