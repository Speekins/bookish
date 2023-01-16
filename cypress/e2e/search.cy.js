describe('Search view', () => {
  beforeEach(() => {
    cy.visitMainPage()
    cy.get('.search').click()
  })

  it('should have a banner image', () => {
    cy.get('img').first().should('have.attr', 'src')
  })

  it('should describe to the user what they can search', () => {
    cy.get('.search-message').should('contain', 'Show me the most awarded books from')
  })

  it('should be able to select a year', () => {
    cy.searchByYear()
    cy.get('.search-container').find('.book').should('have.length', 3)
  })

  it('should show searched books', () => {
    cy.searchByYear()
    cy.get('.book').first().find('img').should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358190204l/16115612.jpg")
    cy.get('.book').eq(1).find('img').should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534070896l/17212231.jpg")
    cy.get('.book').last().find('img').should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1358173808l/15790842.jpg")
  })

  it('should be able to favorite a book', () => {
    cy.searchByYear()
    cy.get('.book').first().find('.heart').click()
    cy.get('.book').first().find('.heart').should('have.attr', 'src', '/static/media/heart-solid.d7c94efcc368b60f1b616ebb888de958.svg')
  })

  it('should be able to unfavorite a book', () => {
    cy.searchByYear()
    cy.get('.book').first().find('.heart').click()
    cy.get('.book').first().find('.heart').click()
    cy.get('.book').first().find('.heart').should('have.attr', 'src', '/static/media/heart-regular.3fb901111a227933a654d4b8dcba6e2a.svg')
  })

  it('should clear search results after navigating away from page', () => {
    cy.searchByYear()
    cy.get('.home-button').click()
    cy.get('.search').click()
    cy.get('.search-container').should('be.empty')
  })

  it('should show modal with more info when book cover is clicked', () => {
    cy.searchByYear()
    cy.get('.search-container').find('.book').first().click()
    cy.intercept('https://hapi-books.p.rapidapi.com/book/16115612', { fixture: '../fixtures/homebookdetails.json'})
    cy.get('.modal').should('be.visible')
  })
})

describe('Search View Error Handling', () => {
  beforeEach(() => {
    cy.visitMainPage()
    cy.get('.search').click()
  })

  it('should have the "Past Popular" button disabled while viewing search', () => {
    cy.get('.search').should('have.attr', 'disabled')
  })
})