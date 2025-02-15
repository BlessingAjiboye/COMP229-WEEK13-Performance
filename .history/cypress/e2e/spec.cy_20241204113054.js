//describe('template spec', () => {
  //it('passes', () => {
    //cy.visit('https://example.cypress.io')
  //})
//})
describe('signin / signout flow specification', () => {
  it('cannot navigate to /profile without being logged in', () => {
    cy.visit("/profile")
    .url().should('include', "/signin");
  });
  

  it('rejects a login attempt by an invalid mern_skeleton user: !!!', () => {
    cy.visit("/signin")
    .get('input[name="username"]').type("!!!").type("{enter}")
    .url().should('include', "/signin");
  });
  
});