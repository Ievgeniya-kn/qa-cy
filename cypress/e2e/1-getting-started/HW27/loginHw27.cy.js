/// <reference types="cypress" />
import LoginPage from "../../../support/pageObject/pages/LoginPage"
// import credentials from "../../../fixtures/credential.json"

const user_name = Cypress.config("USER_NAME")
const user_password = Cypress.config("USER_PASSWORD")

describe('example to-do app', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it('1 - Verify Error Password is required', () => {
        LoginPage.login("1", "")
        LoginPage.verifyErrorMessage('Epic sadface: Password is required')
        // cy.get('.error-message-container').should('have.text', )
    })

    it('2 - Verify Error username is required', () => {
        LoginPage.login(null, "1")
        LoginPage.verifyErrorMessage('Epic sadface: Username is required')
        // cy.get('.error-message-container').should('have.text', )
    })

    it('3 - Verify Error username and Password shoudl exist', () => {
        LoginPage.login("1", "1")
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service')
        // cy.get('.error-message-container').should('have.text', )
    })

    it('4 - Verify existed User can login', () => {
        LoginPage.login(user_name,user_password)
        cy.get('.title').should('have.text', 'Products')
    })

    it('5 - Verify existed User can login', () => {
        LoginPage.login(user_name, user_password)
        cy.get('.inventory_item_desc').first().should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    })

})

