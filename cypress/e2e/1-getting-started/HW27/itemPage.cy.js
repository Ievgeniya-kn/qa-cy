/// <reference types="cypress" />

import LoginPage from "../../../support/pageObject/pages/LoginPage"
import credentials from "../../../fixtures/credential.json"
import ItemPage from "../../../support/pageObject/pages/ItemPage";
import InventoryPage from "../../../support/pageObject/pages/InventoryPage";

describe('example to-do app', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(credentials.usernameValid, credentials.password);
        InventoryPage.clickItemName(4);
    })

    it('1- Verify picture on page', () => {
        ItemPage.itemPicture.should('be.visible');
    })

    it('2- Verify description on page', () => {
        ItemPage.itemDescription.should('be.visible');
    })

    it('3- Verify title on page', () => {
        ItemPage.itemTitle.should('be.visible');
    })

    it('4- Verify price on page', () => {
        ItemPage.priceText.should('be.visible');
    })
    it('5 - REmove Button is displayed after Press on Add to Cart button', () => {
        ItemPage.addToCartAction();
        ItemPage.removeButton.should('be.visible');
    })

    it('6 - Add to Cart Button is displayed after Press on Remove button', () => {
        ItemPage.addToCartAction();
        ItemPage.removeButton.should('be.visible');
        ItemPage.removeAction();
        ItemPage.addToCartButton.should('be.visible');
    })
})