const { assert } = require("chai");
const helpers = require("../runtime/helpers");

module.exports = {
    SauceDemoPortal : 'https://www.saucedemo.com/',
    elements : {
               // THESE ARE  ALL FOR LOGIN : 
               userName: by.name('user-name'), // '//*[@id="user-name"]', user-name
               passWord: by.name('password'), //'//*[@id="password"]',
               LoginActionButton : '//*[@id="login-button"]',
               ProductsHeader: '//*[@id="header_container"]/div[2]/span',
                // viewing products :
               ProductImage: '//*[@id="item_4_img_link"]/img', 
               ProductName: '//*[@id="item_4_title_link"]/div',
               ProductDetail: '//*[@id="inventory_item_container"]/div/div/div[2]/div[1]',
 
               //BackpackProduct: '//*[@id="item_4_title_link"]/div',
               //BackpackDetail: '//*[@id="inventory_item_container"]/div/div/div[2]/div[1]',
               my_shopping_cart: '//*[@id="shopping_cart_container"]/a',
               shopping_cart_header: '//*[@id="header_container"]/div[2]/span',
               Add_Backbag: '//*[@id="add-to-cart-sauce-labs-backpack"]',
               Add_BikeLight: '//*[@id="add-to-cart-sauce-labs-bike-light"]',
               Add_BoltTShirt: '//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]',
               Add_FleeceJacket: '//*[@id="add-to-cart-sauce-labs-fleece-jacket"]',
               Add_Onezie: '//*[@id="add-to-cart-sauce-labs-onesie"]',
               Add_RedTshirt: '//*[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]',

               Checkout_button: '//*[@id="checkout"]',
               ContinueShopping_button: '//*[@id="continue-shopping"]', // need to write
               First_Name: by.name('firstName'),
               Last_Name: by.name('lastName'),
               Postal_Code: by.name('postalCode'),
               ContinueCheckout_button: '//*[@id="continue"]',
               CancelCheckout_button: '//*[@id="cancel"]', // need to write
               ErrorMessage1: '//*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3', // need to write
               CheckoutOverview_header : '//*[@id="header_container"]/div[2]/span',
               FinishCheckout_button: '//*[@id="finish"]',
               Thankyou_message: '//*[@id="checkout_complete_container"]/h2',
               BacktoHome_button : '//*[@id="back-to-products"]',


               Remove_Backbag: '//*[@id="remove-sauce-labs-backpack"]', 
               Remove_BikeLight: '//*[@id="remove-sauce-labs-bike-light"]',
               Remove_BoltTShirt: '//*[@id="remove-sauce-labs-bolt-t-shirt"]' ,
               Remove_FleeceJacket:'//*[@id="remove-sauce-labs-fleece-jacket"]' ,
               Remove_Onezie: '//*[@id="remove-sauce-labs-onesie"]',
               Remove_RedTshirt: '//*[@id="remove-test.allthethings()-t-shirt-(red)"]',
               

    },
    clickElement : async function(objectKey) {
        //console.log(objectKey + " - entering into Click method");
        const selector = this.elements[objectKey];
        //console.log(selector);
        await driver.sleep(3000);
        //console.log("Click Event of " + objectKey)
        return driver.findElement(By.xpath(selector)).click();
    },
    inputElement : async function(inputname,inputpass) {
        console.log("Name = " + inputname);
        //const selector = this.elements[inputname];
        var selector = page.sauce.elements[inputname];
        console.log("inputvalue = " + inputpass);
        await driver.sleep(3000);  
       // return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);
        return driver.findElement(selector).sendKeys(inputpass); 
       // return driver.findElement(By.name(inputname)).sendKeys(inputvalue);
    },
    elementExists : async function(objectKey){
        const selector = this.elements[objectKey];
        console.log(objectKey + " checking element existing or not");
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector));
    }
    

    
}