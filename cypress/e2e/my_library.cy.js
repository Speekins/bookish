describe('My Library View', () => {

  beforeEach(() => {
    cy.visitMainPage()
    cy.addBooksToLibrary()
    cy.get('.my-library-button').click()
  })

  it('should have a banner image', () => {
    cy.get('img').first().should('have.attr', 'src', '/static/media/my-library-banner.898a8723a451e79969a6.jpg')
  })

  it('should have a heading', () => {
    cy.get('h1').should('contain', 'My Library')
  })

  it('should have three books in the library', () => {
    cy.get('.book-container').find('.book').should('have.length', 3)

    cy.get('.book-container')
      .find('.book')
      .first()
      .find('img')
      .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643228739l/55196813.jpg")

    cy.get('.book-container')
      .find('.book')
      .eq(1)
      .find('img')
      .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1662214010l/61295403.jpg")

    cy.get('.book-container')
      .find('.book')
      .eq(2)
      .find('img')
      .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588319723l/51335759._SY475_.jpg")
  })

  it('should show all books in library as "liked"', () => {
    cy.get('.book-container')
      .find('.book')
      .first()
      .find('.heart')
      .should('have.attr', 'src', '/static/media/heart-solid.d7c94efcc368b60f1b616ebb888de958.svg')

    cy.get('.book-container')
      .find('.book')
      .eq(1)
      .find('.heart')
      .should('have.attr', 'src', '/static/media/heart-solid.d7c94efcc368b60f1b616ebb888de958.svg')

    cy.get('.book-container')
      .find('.book')
      .eq(2)
      .find('.heart')
      .should('have.attr', 'src', '/static/media/heart-solid.d7c94efcc368b60f1b616ebb888de958.svg')
  })

  it('should remove a book from the libary after the ', () => {
    cy.get('.book-container').find('.book').first().find('.heart').click()

    cy.get('.book-container').find('.book').should('have.length', 2)
    cy.get('.book-container').find('.book').first().find('img').should('have.attr', 'alt', "Cover of A Heart That Works")
  })
})

describe('My Library Error Handling', () => {
  beforeEach(() => {
    cy.visitMainPage()
    cy.get('.my-library-button').click()
  })

  it('should have the "My Library" button disabled while viewing library', () => {
    cy.get('.my-library-button').should('have.attr', 'disabled')
  })

  it('should alert the user if they have not liked any books yet', () => {
    cy.get('.no-books-warning').should('be.visible')
  })
})