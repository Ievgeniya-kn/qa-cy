/// <reference types="cypress" />
import BasePage from "./BasePage"

class LoginPage extends BasePage {
    get userNameField() {
        return cy.get('#user-name')
    }

    get passwordField() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    get errorText() {
        return cy.get('.error-message-container')
    }

    open() {
        super.open('')
    }

    login(username, password) {
        if (username) this.userNameField.type(username)
        if (password) this.passwordField.type(password)
        this.loginButton.click()
    }

    verifyErrorMessage(text) {
        this.errorText.should('have.text',text);
    }

}
export default new LoginPage()