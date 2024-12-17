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
    cy.visit('/profile') // Attempt to visit /profile directly
      .url().should('include', '/signin'); // Should redirect to /signin
  });

  it('rejects a login attempt by an invalid mern_skeleton user: !!!', () => {
    cy.visit('/signin') // Ensure visiting the signin page
      .get('input[name="email"]') // Correct the attribute selector
      .type('!!!')
      .get('input[name="password"]') // Assuming password input is also required
      .type('invalidpassword')
      .get('button[type="submit"]') // Assuming a submit button
      .click()
      .url().should('include', '/signin'); // Should stay on /signin
  });

  it('successfully authenticates a valid mern_skeleton user: test-account and logs out', () => {
    cy.visit('/') // Navigate to signin page
      .get('input[name="email"]') // Correct the attribute selector
      .type('fred@yahoo.com') // Assuming an email format
      .get('input[name="password"]')
      .type('validpassword') // Provide valid credentials
      .get('button[type="submit"]') // Assuming a submit button
      .click()
      .url().should('include', '/profile') // Should navigate to /profile
      .get('nav').contains('Logout').click() // Assuming a Logout button in the navigation bar
      .url().should('include', '/signin'); // Should redirect to /signin after logout
  });
});




