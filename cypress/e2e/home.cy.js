describe('Home page view', () => {
  beforeEach(() => {

    cy.visitMainPage()
  })

  it('should confirm true equals true', () => {
    expect(true).to.equal(true)
  })

  // it('should be able to click on a book to see additional details', () => {

  // })

  it('should show current popular books in the fiction genre', () => {
    cy.get('.genre-name').first().should('contain', 'Fiction')

    cy.get('.genre').first().find('img[alt="Cover of The Maid"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643228739l/55196813.jpg")

    cy.get('.genre').first().find('img[alt="Cover of All Your Perfects"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531682842l/38926487.jpg")
  })

  it('should show current popular books in the non-fiction genre', () => {
    cy.get('.genre-name').eq(1).should('contain', 'Non-Fiction')

    cy.get('.genre').eq(1).find('img[alt="Cover of A Heart That Works"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1662214010l/61295403.jpg")
    
    cy.get('.genre').eq(1).find('img[alt="Cover of Never Finished: Unshackle Your Mind and Win the War Within"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666611105l/63079845._SY475_.jpg")
  })

  it('should show current popular books in the mystery genre', () => {
    cy.get('.genre-name').eq(2).should('contain', 'Mystery')

    cy.get('.genre').eq(2).find('img[alt="Cover of Good Girl, Bad Blood"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588319723l/51335759._SY475_.jpg")

    cy.get('.genre').eq(2).find('img[alt="Cover of All Good People Here"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1642984407l/60142750.jpg")
  })

  it('should show current popular books in the memoir genre', () => {
    cy.get('.genre-name').eq(3).should('contain', 'Memoir')

    cy.get('.genre').eq(3).find('img[alt="Cover of Crying in H Mart"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601937850l/54814676.jpg")

    cy.get('.genre').eq(3).find('img[alt="Cover of Everything I Know About Love"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563761980l/46041465.jpg")
  })

  it('should show current popular books in the romance genre', () => {
    cy.get('.genre-name').eq(4).should('contain', 'Romance')

    cy.get('.genre').eq(4).find('img[alt="Cover of Daisy Jones & The Six"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580255154l/40597810._SY475_.jpg")

    cy.get('.genre').eq(4).find('img[alt="Cover of Mad Honey"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1642705453l/59912428.jpg")
  })

  it('should show current popular books in the history genre', () => {
    cy.get('.genre-name').eq(5).should('contain', 'History')

    cy.get('.genre').eq(5).find('img[alt="Cover of The Personal Librarian"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610646708l/55333938.jpg")

    cy.get('.genre').eq(5).find('img[alt="Cover of Yellow Wife"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608477179l/54304031.jpg")
  })
  
  it('should show current popular books in the horror genre', () => {
    cy.get('.genre-name').eq(6).should('contain', 'Horror')

    cy.get('.genre').eq(6).find('img[alt="Cover of The House Across the Lake"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639618949l/58909880.jpg")

    cy.get('.genre').eq(6).find('img[alt="Cover of Five Survive"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664370443l/61313902._SY475_.jpg")
  })
  
  it('should show current popular books in the science fiction genre', () => {
    cy.get('.genre-name').eq(7).should('contain', 'Science Fiction')

    cy.get('.genre').eq(7).find('img[alt="Cover of The Seven Deaths of Evelyn Hardcastle"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1662198321l/62229748.jpg")

    cy.get('.genre').eq(7).find('img[alt="Cover of Artificial Condition"]')
    .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1505590203l/36223860._SY475_.jpg")
  })

  // it('should be able to like a book and have it added to the library', () => {
    
  // })

  it('should be able to click on a book to get additional details', () => {
    
  })

})

// describe('Home Page Errors', () => {

//   beforeEach(() => {

//   })

//   it('should allow warn the user if a bad URL path is entered', () => {
    
//   })

//   it('should allow the user to navigate back home if a bad URL path is entered', () => {
    
//   })

//   it('should alert the user is some data was not fetched properly', () => {
    
//   })
// })