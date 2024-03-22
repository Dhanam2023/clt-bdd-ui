const { assert } = require("chai");
const helpers = require("../runtime/helpers");
module.exports = {
    SmartSubPortal: 'https://www.smartsubmissions.com',
    elements: {
        LoginButton: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        email: by.name('email'),
        password: by.name('password'),
        LoginActionButton: '//*[@id="RegistrationForm"]/div[3]/button',
        EmailErrorMessage: '//*[@id="RegistrationForm"]/div[1]/div[2]',
        PasswordErrorMessage: '//*[@id="RegistrationForm"]/div[2]/div[2]',
        LoginHeader: '//*[@id="RegistrationForm"]/img' 
    },
    clickElement: async function (objectKey){ // Login Button Click Event
        console.log("Object Key of click js is " + page.smartsub[objectKey])
        const selector = this.elements[objectKey];
        //console.log(selector)
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
    },
    elementExists: async function (objectKey){
        const selector = this.elements[objectKey]; 
        console.log("Object Key of seeing js is " + page.smartsub[objectKey])

        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)); // true // false
    },
    inputElement: async function (inputname, inputvalue) { // username or password
       // console.log("Object Key js is %d", objectKey)
        const selector = this.elements[inputname];
        await driver.sleep(3000);
        console.log("name = %d and value = %d ", inputname,inputvalue)

        return driver.findElement(selector).sendKeys(inputvalue);
    }
}