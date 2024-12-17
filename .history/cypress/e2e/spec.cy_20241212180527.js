describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    //cy.get('Typography variant="body2" component="p"').should('contain', 'Welcome to the MERN Skeleton home page')
    cy.get('p').should('contain', 'E-commerce Application')
    
  })

 it('cannot navigate to /profile without being logged in', () => {
    //cy.visit("/signin")
    //.url().should('include', "/signin");
  //});

  it('rejects a login attempt by an invalid mern_skeleton user: !!!', () => {
    cy.visit("/")
    
  });

  it('successfully authenticates a valid mern_skeleton user: test-account and logs out', () => {
    //cy.visit("/signin")
    cy.visit("/")
  })
  
});





