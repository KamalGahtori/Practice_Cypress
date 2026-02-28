/// <reference types="cypress" />
import { loginPage } from "../page_object/swagLabs/login";

describe("Swag Labs", () => {

    it("Login", () => {
        cy.visit(Cypress.env("url"));
        loginPage.login();
    })
})