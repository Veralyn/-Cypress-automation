/// <reference types="cypress" />


describe('Dashboard Page Test', ()=>{
// Runs before each test — logs in and opens profile page
 beforeEach (() => {
    cy.login();  //Reusable login command
    
 });

//
 it('opens the dashboard dropdown, clicks on the Employee Leave page', ()=>{
cy.wait(6000);
cy.get('.MuiToolbar-root > .MuiButtonBase-root').click();
cy.wait(6000);
cy.get('[href="/employee-leave"] > .MuiListItemText-root').click({ force: true });
cy.get('.MuiToolbar-root > .MuiTypography-root').contains('Employee Leave')
.should('be.visible')
cy.get(':nth-child(1) > .css-tl7q2a > .css-dwgza1 > .css-0 > .MuiTypography-caption')
.contains('Annual Leave Maximum Days')
.should('be.visible')

 })

//  it ('opens Employee Leave page', ()=>{
//  cy.wait(4000)
// cy.get('.MuiToolbar-root > .MuiButtonBase-root').click();

//  })
});




