import React from 'react'
import { PointCounter } from './PointCounter'

describe('<PointCounter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PointCounter pointsSpent={1} maxPoints={100} />);
    cy.get('[data-cy="pointsSpent"]').should('have.text',"1");
    cy.get('[data-cy="maxPoints"]').should('have.text',"100");
  });
})