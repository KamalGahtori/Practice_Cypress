it("Login", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("#login-button").click();
})