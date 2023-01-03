/// <reference types="cypress" />
// cypress/integration/app.spec.js

describe("Home", () => {
  it("should have home text in index page", () => {
    cy.visit("/");
    cy.contains("Home");
  });
});
