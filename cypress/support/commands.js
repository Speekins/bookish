Cypress.Commands.add('visitMainPage', () => {
  cy.intercept('https://hapi-books.p.rapidapi.com/week/fiction/10', { fixture: '../fixtures/fiction.json' }).as('fiction')

  cy.intercept('https://hapi-books.p.rapidapi.com/week/nonFiction/10', { fixture: '../fixtures/nonfiction.json' }).as('nonFiction')

  cy.intercept('https://hapi-books.p.rapidapi.com/week/history/10', { fixture: '../fixtures/history.json' }).as('history')

  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/memoir/10', { fixture: '../fixtures/memoir.json' }).as('memoir')

  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/mystery/10', { fixture: '../fixtures/mystery.json' }).as('mystery')

  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/romance/10', { fixture: '../fixtures/romance.json' }).as('romance')

  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/scienceFiction/10', { fixture: '../fixtures/sciencefiction.json' }).as('scienceFiction')

  cy.intercept('GET', 'https://hapi-books.p.rapidapi.com/week/horror/10', { fixture: '../fixtures/horror.json' }).as('horror')

  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('getMoreDetails', () => {
  cy.intercept('https://hapi-books.p.rapidapi.com/book/55196813', { fixture: '../fixtures/homebookdetails.json' })
  cy.get('.genre').first().find('img[alt="Cover of The Maid"]').click()
})

Cypress.Commands.add('addBooksToLibrary', () => {
  cy.get('.genre').first().find('.heart').first().click()
  cy.get('.genre').eq(1).find('.heart').first().click()
  cy.get('.genre').eq(2).find('.heart').first().click()
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