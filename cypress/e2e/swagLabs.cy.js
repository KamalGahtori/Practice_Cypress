it("Debug env", () => {
    cy.log("Username: " + Cypress.env.username);
    cy.log("Password: " + Cypress.env.password);
});
it("Login", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("#login-button").click();
})