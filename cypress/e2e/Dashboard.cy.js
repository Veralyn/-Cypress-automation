/// <reference types="cypress" />


describe('Dashboard Page Test', ()=>{
// Runs before each test — logs in and opens profile page
 beforeEach (() => {
    cy.login();  //Reusable login command
    
 });


 it('opens the dashboard dropdown', ()=>{
    cy.wait(4000)
    cy.get('.MuiToolbar-root > .MuiButtonBase-root').click();
 })
});




