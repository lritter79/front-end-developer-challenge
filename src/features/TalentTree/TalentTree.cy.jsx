import React from 'react'
import { TalentTree } from './TalentTree'

describe('<TalentTree />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TalentTree   
        talentTree={{
        id: "1",
        name: "Talent Tree 1",
        talents: [
          {id: "1", name: "Talent 1", description: "Description 1",  selected: true},
          {id: "2", name: "Talent 2", description: "Description 2",  selected: false},
          {id: "3", name: "Talent 3", description: "Description 3",  selected: false}
        ],}
      }
      handleSelect={(treeId, id) => {return;}}
      handleUnselect={(treeId, id) => {return;}} 
    />);
    cy.get('[data-cy="talent-tree-1"]').find('.talent-button').should('have.length', 3);

  });
  it('has buttons in correct order and disabled when needed', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TalentTree   
        talentTree={{
        id: "1",
        name: "Talent Tree 1",
        talents: [
          {id: "1", name: "Talent 1", description: "Description 1",  selected: false},
          {id: "2", name: "Talent 2", description: "Description 2",  selected: false},
          {id: "3", name: "Talent 3", description: "Description 3",  selected: false}
        ],}
      }
      handleSelect={(treeId, id) => {return;}}
      handleUnselect={(treeId, id) => {return;}} 
    />);
    cy.get('[data-cy="talent-1"]').should('not.be.disabled');    
    cy.get('[data-cy="talent-2"]').should('be.disabled');      
    cy.get('[data-cy="talent-3"]').should('be.disabled');
    cy.mount(<TalentTree   
      talentTree={{
      id: "1",
      name: "Talent Tree 1",
      talents: [
          {id: "1", name: "Talent 1", description: "Description 1",  selected: true},
          {id: "2", name: "Talent 2", description: "Description 2",  selected: false},
          {id: "3", name: "Talent 3", description: "Description 3",  selected: false}
        ],
      }}
      handleSelect={(treeId, id) => {return;}}
      handleUnselect={(treeId, id) => {return;}} 
    />);
    cy.get('[data-cy="talent-1"]').should('not.be.disabled');     
    cy.get('[data-cy="talent-2"]').should('not.be.disabled');      
    cy.get('[data-cy="talent-3"]').should('be.disabled');
    cy.mount(<TalentTree   
      talentTree={{
      id: "1",
      name: "Talent Tree 1",
      talents: [
          {id: "1", name: "Talent 1", description: "Description 1",  selected: true},
          {id: "2", name: "Talent 2", description: "Description 2",  selected: true},
          {id: "3", name: "Talent 3", description: "Description 3",  selected: true}
        ],
      }}
      handleSelect={(treeId, id) => {return;}}
      handleUnselect={(treeId, id) => {return;}} 
    />);
    cy.get('[data-cy="talent-1"]').should('not.be.disabled');     
    cy.get('[data-cy="talent-2"]').should('not.be.disabled');      
    cy.get('[data-cy="talent-3"]').should('not.be.disabled');
  });
});