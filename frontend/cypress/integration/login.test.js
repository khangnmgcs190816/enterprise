/// <reference types="cypress" />

const BASE_URL = "http://localhost:3000";

describe("User can log in", () => {
  before(() => {
    cy.visit(`${BASE_URL}/login`);
  });

  it("User can be redirected to main page after loggin in", () => {
    cy.get('input[name="username"]')
      .should("be.visible")
      .type("trong@gmail.com")
      .get('input[name="password"]')
      .should("be.visible")
      .type("trongvip")
      .get('button[type="submit"]')
      .should("be.visible")
      .click();
    cy.url().should("eq", `${BASE_URL}/`);
    cy.get('svg[data-testid="PersonIcon"]').click();
    cy.xpath('//li//a[text()="Trong"]').should("have.text", "Trong");
    cy.get("body").click(0, 0);
  });

  it("User logs out successfully", () => {
    cy.get('[data-testid="PersonIcon"]').click();
    cy.xpath('//p[text()=" Logout"]/parent::li').click();
  });
});
