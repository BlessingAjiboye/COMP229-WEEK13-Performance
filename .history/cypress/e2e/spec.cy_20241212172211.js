describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    //cy.get('Typography variant="body2" component="p"').should('contain', 'Welcome to the MERN Skeleton home page')
    cy.get('p').should('contain', 'E-commerce Application')
    //.url().should('include', "/signin")
    //.should('include', "/signup")

    //.url().should('include', "/signup")
    //cy.visit('/signin')
    //cy.visit('/signup')
    //cy.visit('/users')
    //.url().should('include', "/users")
    
  })

//  it('cannot navigate to /profile without being logged in', () => {
  //  cy.visit("/")
    //.url().should('include', "/signin");
  //});

  it('rejects a login attempt by an invalid mern_skeleton user: !!!', () => {
    cy.visit("/signin")
    .get('input[type="email"]').type("fred@yahoo.com").get('input[type="password"]').type("fredfred").type("{enter}")
    .url().should('include', "/signin");
  });

  it('successfully authenticates a valid mern_skeleton user: test-account and logs out', () => {
    //cy.visit("/signin")
    cy.visit("/")
    //.get('input[type="email"]').type("fred@yahoo.com")
    //.get('input[type="password"]').type("fredfred").type("{enter}")
    //.url().should('include', '/profile')
    //.get("nav").contains("Signout").click()//
    //.url().should('include', "/signin")
    //.url().should('include', "/signup")
    //.url().should('include', "/home")
    //.url().should('include', "/seller/shop")
    //.url().should('include', "/seller/seller-profile")
    //.url().should('include', "/seller/seller-dashboard")
    //.url
  })
  
});





