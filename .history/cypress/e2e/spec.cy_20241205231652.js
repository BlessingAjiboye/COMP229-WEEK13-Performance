describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/home')
    
    cy.get('h1').should('contain', 'Welcome to MERN skeleton')
    cy.visit('http://localhost:3000/about')
    cy.visit('http://localhost:3000/projects')
    cy.visit('http://localhost:3000/contact')
    cy.visit('http://localhost:3000/signin')
    cy.visit('http://localhost:3000/signup')
    cy.visit('http://localhost:3000/profile')
    cy.visit('https://localhost:3000/home')
    cy.visit('https://localhost:3000/about')
    cy
  })
})
describe('signin / signout flow specification', () => {
  it('cannot navigate to /profile without being logged in', () => {
    cy.visit("/")
    .url().should('include', "/signin");
  });

  it('rejects a login attempt by an invalid mern_skeleton user: !!!', () => {
    cy.visit("/")
    .get('input[type="email"]').type("!!!").type("{enter}")
    .url().should('include', "/signin");
  });

  it('successfully authenticates a valid mern_skeleton user: test-account and logs out', () => {
    //cy.visit("/signin")
    cy.visit("/")
    .get('input[type="email"]').type("fred@yahoo.com")
    .get('input[type="password"]').type("fredfred").type("{enter}")
    .url().should('include', '/profile')
    .get("nav").contains("Signout").click()
    .url().should('include', "/signin");
  });
  
});





