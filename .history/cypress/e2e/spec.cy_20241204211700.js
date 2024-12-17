//describe('template spec', () => {
  //it('passes', () => {
    //cy.visit('https://example.cypress.io')
  //})
//})


/*describe('signin / signout flow specification', () => {
  it('cannot navigate to /profile without being logged in', () => {
    cy.visit("/")
    .url().should('include', "/signin");
  });

  it('rejects a login attempt by an invalid mern_skeleton user: !!!', () => {
    cy.visit("/")
    .get('input[email="email"]').type("!!!").type("{enter}")
    .url().should('include', "/signin");
  });

  it('successfully authenticates a valid mern_skeleton user: test-account and logs out', () => {
    //cy.visit("/signin")
    cy.visit("/")
    .get('input[email="email"]').type("test-account").type("{enter}")
    .url().should('include', '/profile')
    .get("nav").contains("Logout").click()
    .url().should('include', "/signin");
  });
  
});
*/


describe('Signin / Signout Flow Specification', () => {
  it('cannot navigate to /profile without being logged in', () => {
    cy.visit('/profile') // Direct visit to /profile
      .url().should('include', '/signin'); // Should redirect to /signin
  });

  it('rejects a login attempt by an invalid user', () => {
    cy.visit('/signin')
      .get('#email') // Matches `id="email"`
      .type('invalid@example.com')
      .get('#password') // Matches `id="password"`
      .type('wrongpassword')
      .get('button').contains('Submit').click() // Targets the Submit button
      .get('p').contains('error').should('exist'); // Checks for error display
  });

  it('successfully authenticates a valid user and logs out', () => {
    cy.visit('/signin')
      .get('#email') // Matches `id="email"`
      .type('test-account@example.com')
      .get('#password') // Matches `id="password"`
      .type('validpassword')
      .get('button').contains('Submit').click()
      .url().should('include', '/profile') // Redirect to /profile
      .get('nav').contains('Logout').click() // Click Logout
      .url().should('include', '/signin'); // Redirect to /signin
  });
});





