describe('Modal view', () => {
  let synopsis
  beforeEach(() => {
    cy.visitMainPage()
    cy.getMoreDetails()
    synopsis = "Molly Gray is not like everyone else. She struggles with social skills and misreads the intentions of others. Her gran used to interpret the world for her, codifying it into simple rules that Molly could live by. Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life's complexities all by herself. No matter—she throws herself with gusto into Molly Gray is not like everyone else. She struggles with social skills and misreads the intentions of others. Her gran used to interpret the world for her, codifying it into simple rules that Molly could live by. Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life's complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job. She delights in donning her crisp uniform each morning, stocking her cart with miniature soaps and bottles, and returning guest rooms at the Regency Grand Hotel to a state of perfection. But Molly's orderly life is upended the day she enters the suite of the infamous and wealthy Charles Black, only to find it in a state of disarray and Mr. Black himself dead in his bed. Before she knows what's happening, Molly's unusual demeanor has the police targeting her as their lead suspect. She quickly finds herself caught in a web of deception, one she has no idea how to untangle. Fortunately for Molly, friends she never knew she had unite with her in a search for clues to what really happened to Mr. Black—but will they be able to find the real killer before it's too late? A Clue-like, locked-room mystery and a heartwarming journey of the spirit, The Maid explores what it means to be the same as everyone else and yet entirely different—and reveals that all mysteries can be solved through connection to the human heart. Alternate cover edition of ISBN 9780593356159."
  })

  it('should have a header', () => {
    cy.get('.modal-header').should('contain', 'The Maid')
  })

  it('should show the book cover', () => {
    cy.get('.modal-cover')
      .should('have.attr', 'src', "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643228739l/55196813.jpg")
  })

  it('should show the author(s) name(s)', () => {
    cy.get('.modal-details').find('p').first().should('contain', 'Author(s): Nita Prose')
  })

  it('should show the book\'s rating', () => {
    cy.get('.modal-details').find('p').eq(1).should('contain', '3/5')
  })

  it('should show the number of pages', () => {
    cy.get('.modal-details').find('p').eq(2).should('contain', '304')
  })

  it('should show the publish date', () => {
    cy.get('.modal-details').find('p').eq(3).should('contain', 'January 4th 2022')
  })

  it('should provide a synopsis of the book', () => {
    cy.get('.modal-synopsis').should('contain', synopsis)
  })

  it('should be able to exit the modal', () => {
    cy.get('.close-modal').click()
    cy.get('.modal').should('not.exist')
  })
})