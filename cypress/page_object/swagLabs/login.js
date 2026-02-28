/// <reference types="cypress" />

const locators = {
    userNameInput: "#user-name",
    passwordInput: "#password",
    loginButton: "#login-button"
}

export const loginPage = {
    login() {
        cy.get(locators.userNameInput).type(Cypress.env("username"));
        cy.get(locators.passwordInput).type(Cypress.env("password"))
        cy.get(locators.loginButton).click();
    }
}