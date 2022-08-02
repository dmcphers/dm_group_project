import {Google} from './gbcPO'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()



test('do a search', async () => {
    await google.navigate()
    await google.search('Dog')
    let text = await google.getResults()
    await google.driver.sleep(5000);
    await google.click(google.popupObject)
    expect(text).toContain('Dog')
})



/*
test('register user', async () => {
    await google.navigate()
    await google.clickAccountIcon()
    await google.clickRegisterNewBtn()
    await google.registerFirstName('dmtestl')
    await google.registerLastName('userl')
    await google.registerEmail('dmtestuserl@dmtest.com')
    await google.clickAccountType()
    await google.registerPassword('dm12345')
    await google.registerVerifyPassword('dm12345')
    await google.clickRegisterBtn()
    //let text = await google.getHeader()
    await google.driver.sleep(5000);
    //expect(text).toContain('Hello, dmtestj!')
})
*/


/*
test('login', async () => {
    await google.navigate()
    await google.clickAccountIcon()
    await google.loginEmail('sharolynshimer@gmail.com')
    await google.loginPassword('Devmountain!')
    let text = await google.getHeader()
    await google.driver.sleep(5000)
    expect(text).toContain('Hello, Team 4!')
})
*/



/*

test('add to cart', async () => {
    await google.navigate()
    await google.clickAccountIcon()
    await google.loginEmail('sharolynshimer@gmail.com')
    await google.loginPassword('Devmountain!')
    await google.driver.sleep(5000)
    await google.search('Dog')
    await google.driver.sleep(5000)
    await google.click(google.popupObject)
    await google.clickItemToPurchase()
    await google.driver.sleep(5000)
    //await google.driver.sleep(5000)
    //await google.click(google.popupObject)
    await google.clickAddToCartButton()
    await google.driver.sleep(5000)
    await google.click(google.viewCart)
    await google.driver.sleep(5000)
})
*/




/*
test('track order', async () => {
    await google.navigate()
    await google.clickAccountIcon()
    await google.loginEmail('sharolynshimer@gmail.com')
    await google.loginPassword('Devmountain!')
    await google.driver.sleep(5000)
    await google.clickTrackingIcon()
    await google.driver.sleep(5000)
    
    await google.click(google.popupObject)
    await google.driver.sleep(5000)

    //await google.orderTrackingInput('123456789')
    await google.clickTrackOrderButton()
    await google.driver.sleep(5000)
})
*/



//G4CP-30: To test if user account is getting disabled after multiple invalid sign in attempts.
/*
test(' Invalid login attempts', async () => {
    await google.navigate()
    await google.clickAccountIcon()
    for (var i=0; i<= 6; i++) {
    await google.loginEmail('h10@t.com')
    await google.loginPassword('123456')
    }
    let text = await google.findErrorMessage()
    await google.driver.sleep(1000)
    expect(text).toContain("Sorry, you've tried too many times. Please try again later.")
    await google.driver.sleep(5000);
})
*/

afterAll(async () => {
    await google.driver.quit()
})