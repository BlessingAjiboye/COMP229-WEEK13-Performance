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
  
});