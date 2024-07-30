/// <reference types="cypress" />
describe("Rune Mastery Loadout Talent Calculator 9000", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:5173/");
  });

  it("adds points on left click", () => {});

  it("subtracts points on right click", () => {});

  it("Only allows the user to spend 6 points at maximum", () => {});

  it("Displays the correct number of points spent", () => {});

  it("Displays the correct number of points remaining", () => {});

  it("Only lets the user spend points on the correct talents in the correct order", () => {});
});
