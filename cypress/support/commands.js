Cypress.Commands.add('visitMainPage', () => {
  cy.intercept('https://hapi-books.p.rapidapi.com/week/fiction', { fixture: '../fixtures/fiction.json' }).as('fiction')
  // cy.wait('@fiction')
  cy.intercept('https://hapi-books.p.rapidapi.com/week/nonFiction', { fixture: '../fixtures/nonfiction.json' }).as('nonFiction')
  //cy.wait('@nonFiction')
  cy.intercept('https://hapi-books.p.rapidapi.com/week/history', { fixture: '../fixtures/history.json' }).as('history')
  //cy.wait('@history')
  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/memoir', { fixture: '../fixtures/memoir.json' }).as('memoir')
  //cy.wait('@memoir')
  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/mystery', { fixture: '../fixtures/mystery.json' }).as('mystery')
  //cy.wait('@mystery')
  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/romance', { fixture: '../fixtures/romance.json' }).as('romance')
  //cy.wait('@romance')
  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/scienceFiction', { fixture: '../fixtures/sciencefiction.json' }).as('scienceFiction')
  //cy.wait('@scienceFiction')
  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/horror', { fixture: '../fixtures/horror.json' }).as('horror')
  //cy.wait('@horror')
  cy.visit('http://localhost:3000')
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })