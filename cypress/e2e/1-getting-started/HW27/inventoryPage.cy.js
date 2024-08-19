/// <reference types="cypress" />
import LoginPage from "../../../support/pageObject/pages/LoginPage"
import credentials from "../../../fixtures/credential.json"
import InventoryPage from "../../../support/pageObject/pages/InventoryPage";
import ItemPage from "../../../support/pageObject/pages/ItemPage";

describe('example to-do app', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(Cypress.config("USER_NAME"), Cypress.config("USER_PASSWORD"))
    })


    it('1 - Verify Burger Menu is visible', () => {
        InventoryPage.burgerMenu.should('be.visible')
    })

    it('2 - Verify Cart is visible', () => {
        InventoryPage.shoppingCart.should('be.visible')
    })

    it('3 - Verify Sort options is visible', () => {
        InventoryPage.sortingFropdown.should('be.visible')
    })

    it('4 - Verify Sort Options has 4 options', () => {
        InventoryPage.sortOptions.should('have.length', '4')
    })
    it('5 - Verify Cart page is opened after press on Cart icon', () => {
        InventoryPage.shoppingCart.click();
        cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    })

    it('6 - Verify Item Page is opened by index', () => {
        InventoryPage.clickItemName(1);
        ItemPage.itemTitle.should('have.text', 'Sauce Labs Bolt T-Shirt')
    })
})