/// <reference types="cypress" />
import BasePage from "./BasePage"

class ItemPage extends BasePage {

    get itemTitle() {
        return cy.get('.inventory_details_name')
    }

    get itemDescription() {
        return cy.get('.inventory_details_desc')
    }
    get itemPicture() {
        return cy.get('.inventory_details_img_container')
    }

    get priceText() {
        return cy.get('.inventory_details_price')
    }

    get addToCartButton() {
        return cy.get('#add-to-cart')
    }

    get removeButton() {
        return cy.get('#remove')
    }

    addToCartAction() {
        this.addToCartButton.click()
    }

    removeAction() {
        this.removeButton.click()
    }
}
export default new ItemPage()