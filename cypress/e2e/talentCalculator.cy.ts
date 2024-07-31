/// <reference types="cypress" />
describe("Rune Mastery Loadout Talent Calculator 9000", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:5173/");
  });

  it("adds points on left click", () => {
    cy.get('[data-cy="points-spent"]').should("have.text", "0");
    //click on the first talent
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-1"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
  });

  it("subtracts points on right click", () => {
    cy.get('[data-cy="points-spent"]').should("have.text", "0");
    //click on the first talent
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-1"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
    //right click on the first talent
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-1"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "0");
  });

  it("Only allows the user to spend 6 points at maximum", () => {
    cy.get('[data-cy="max-points"]').should("have.text", "6");
    //click on the first talent
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-1"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-2"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-3"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-4"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="talent-tree-2"] > [data-cy="talent-5"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="talent-tree-2"] > [data-cy="talent-6"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="talent-tree-2"] > [data-cy="talent-7"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "6");
  });

  it("Displays current point total", () => {
    cy.get('[data-cy="points-spent"]').should("have.text", "0");

    //click on the first talent
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-1"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "1");

    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-2"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "2");

    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-3"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "3");

    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-4"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "4");

    cy.get('[data-cy="talent-tree-2"] > [data-cy="talent-5"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "5");
    cy.get('[data-cy="talent-tree-2"] > [data-cy="talent-6"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "6"); // Check the points spent before reversing actions

    // Reverse order and actions to undo each click
    cy.get(
      '[data-cy="talent-tree-2"] > [data-cy="talent-6"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "5");
    cy.get(
      '[data-cy="talent-tree-2"] > [data-cy="talent-5"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "4");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-4"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "3");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-3"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "2");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-2"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-1"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "0");
  });

  it("Only lets the user spend/remove points on the correct talents in the correct order", () => {
    cy.get('[data-cy="points-spent"]').should("have.text", "0");

    //click on the first talent
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-1"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-4"]').should(
      "be.disabled"
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-3"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-2"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "2");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-4"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "2");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-3"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "3");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-4"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "4");
    cy.get('[data-cy="talent-tree-1"] > [data-cy="talent-2"]').click(
      "left",
      { force: true }
    );
    cy.get('[data-cy="points-spent"]').should("have.text", "4");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-1"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "4");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-4"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "3");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-1"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "3");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-2"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "3");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-3"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "2");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-3"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "2");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-4"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "2");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-2"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "1");
    cy.get(
      '[data-cy="talent-tree-1"] > [data-cy="talent-1"]'
    ).rightclick({ force: true });
    cy.get('[data-cy="points-spent"]').should("have.text", "0");
  });
});
