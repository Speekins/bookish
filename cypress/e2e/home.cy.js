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
  })
  // it('should show current popular books in the non-fiction genre', () => {
    
  // })
  // it('should show current popular books in the mystery genre', () => {
    
  // })
  // it('should show current popular books in the memoir genre', () => {
    
  // })
  // it('should show current popular books in the history genre', () => {
    
  // })
  // it('should show current popular books in the romance genre', () => {
    
  // })
  // it('should show current popular books in the horror genre', () => {
    
  // })
  // it('should show current popular books in the science fiction genre', () => {
    
  // })

  // it('should be able to like a book and have it added to the library', () => {
    
  // })

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