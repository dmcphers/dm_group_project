import {GBC} from './gbcPO'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const gbc = new GBC()



test('do a search', async () => {
    await gbc.navigate()
    await gbc.search('Dog')
    let text = await gbc.getResults()
    await gbc.driver.sleep(5000);
    await gbc.click(gbc.popupObject)
    expect(text).toContain('Dog')
})



/*
test('register user', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.clickRegisterNewBtn()
    await gbc.registerFirstName('dmtestl')
    await gbc.registerLastName('userl')
    await gbc.registerEmail('dmtestuserl@dmtest.com')
    await gbc.clickAccountType()
    await gbc.registerPassword('dm12345')
    await gbc.registerVerifyPassword('dm12345')
    await gbc.clickRegisterBtn()
    //let text = await gbc.getHeader()
    await gbc.driver.sleep(5000);
    //expect(text).toContain('Hello, dmtestj!')
})
*/


/*
test('login', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('sharolynshimer@gmail.com')
    await gbc.loginPassword('Devmountain!')
    let text = await gbc.getHeader()
    await gbc.driver.sleep(5000)
    expect(text).toContain('Hello, Team 4!')
})
*/



/*

test('add to cart', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('sharolynshimer@gmail.com')
    await gbc.loginPassword('Devmountain!')
    await gbc.driver.sleep(5000)
    await gbc.search('Dog')
    await gbc.driver.sleep(5000)
    await gbc.click(gbc.popupObject)
    await gbc.clickItemToPurchase()
    await gbc.driver.sleep(5000)
    //await gbc.driver.sleep(5000)
    //await gbc.click(gbc.popupObject)
    await gbc.clickAddToCartButton()
    await gbc.driver.sleep(5000)
    await gbc.click(gbc.viewCart)
    await gbc.driver.sleep(5000)
})
*/




/*
test('track order', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    await gbc.loginEmail('sharolynshimer@gmail.com')
    await gbc.loginPassword('Devmountain!')
    await gbc.driver.sleep(5000)
    await gbc.clickTrackingIcon()
    await gbc.driver.sleep(5000)
    
    await gbc.click(gbc.popupObject)
    await gbc.driver.sleep(5000)

    //await gbc.orderTrackingInput('123456789')
    await gbc.clickTrackOrderButton()
    await gbc.driver.sleep(5000)
})
*/


/*
test(' Invalid login attempts', async () => {
    await gbc.navigate()
    await gbc.clickAccountIcon()
    for (var i=0; i<= 6; i++) {
    await gbc.loginEmail('h10@t.com')
    await gbc.loginPassword('123456')
    }
    let text = await gbc.findErrorMessage()
    await gbc.driver.sleep(1000)
    expect(text).toContain("Sorry, you've tried too many times. Please try again later.")
    await gbc.driver.sleep(5000);
})
*/

afterAll(async () => {
    await gbc.driver.quit()
})