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

////////////////////////////////////////////////////
/*describe('Signin / Signout Flow Specification', () => {
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
    cy.visit('/')
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




*/


describe('Signin / Signout Flow Specification', () => {
  it('cannot navigate to /profile without being logged in', () => {
    cy.visit('/profile') // Attempt to visit /profile directly
      .url().should('include', '/signin'); // Should redirect to /signin
  });

  it('rejects a login attempt by an invalid user', () => {
    cy.visit('/signin'); // Navigate to the signin page

    // Wait for the email input field to appear
    cy.contains('Sign In').should('exist'); // Ensure the page is rendered
    cy.get('#email', { timeout: 10000 }) // Wait for the email field
      .should('be.visible') // Assert it's visible
      .type('invalid@example.com'); // Type invalid email

    // Enter a wrong password
    cy.get('#password', { timeout: 10000 })
      .should('be.visible')
      .type('wrongpassword');

    // Submit the form
    cy.get('button').contains('Submit').click();

    // Check for an error message
    cy.get('p').contains('error').should('exist'); // Verify error is displayed
  });

  it('successfully authenticates a valid user and logs out', () => {
    cy.visit('/signin'); // Navigate to the signin page

    // Wait for the email input field to appear
    cy.contains('Sign In').should('exist');
    cy.get('#email')
      .should('be.visible')
      .type('test-account@example.com'); // Type valid email

    // Enter a valid password
    cy.get('#password')
      .should('be.visible')
      .type('validpassword');

    // Submit the form
    cy.get('button').contains('Submit').click();

    // Verify the redirect to the profile page
    cy.url().should('include', '/profile');

    // Logout process
    cy.get('nav').contains('Logout').click(); // Find and click Logout button

    // Verify redirect to signin after logout
    cy.url().should('include', '/signin');
  });
});

