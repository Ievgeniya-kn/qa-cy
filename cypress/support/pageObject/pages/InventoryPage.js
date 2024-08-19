/// <reference types="cypress" />
import BasePage from "./BasePage"

class InventoryPage extends BasePage {

    get burgerMenu() {
        return cy.get('#react-burger-menu-btn')
    }

    get shoppingCart() {
        return cy.get('#shopping_cart_container')
    }

    get sortingFropdown() {
        return cy.get('.select_container')
    }
    get sortOptions() {
        return cy.get('[data-test="product-sort-container"] option')
    }

    get addToCartButtonBackpack() {
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    get itemNameButton() {
        return cy.get('#item_${number}_title_link')
    }

    clickItemName(number) {
        cy.get(`#item_${number}_title_link`).click()
    }


}

export default new InventoryPage()