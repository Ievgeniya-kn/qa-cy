/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
          cy.visit('https://www.saucedemo.com/')
    })

    it('1 - Verify Error Password is required', () => {
        cy.get('#user-name').type("1")
        cy.get('#login-button').click()

        cy.get('.error-message-container').should('have.text', 'Epic sadface: Password is required')
    })

    it('2 - Verify Error username is required', () => {
        cy.get('#password').type("1")
        cy.get('#login-button').click()

        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username is required')
    })

    it('3 - Verify Error username and Password shoudl exist', () => {
        cy.get('#user-name').type("1")
        cy.get('#password').type("1")
        cy.get('#login-button').click()

        cy.get('.error-message-container').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('4 - Verify existed User can login', () => {
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('.title').should('have.text', 'Products')
    })

    it('5 - Verify existed User can login', () => {
        cy.get('#user-name').type("problem_user")
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('.inventory_item_desc').first().should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    })

})