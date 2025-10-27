/// <reference types="cypress" />


describe('Change Password Test', ()=>{
// Runs before each test — logs in and opens profile page
 beforeEach (() => {
    cy.login();  //Reusable login command
  //   cy.visit('/')
  // cy.get('[name="emailOrHRTag"]').type('vomichael@sidmach.com');
  // cy.get('[name="password"]').type('Veramykels@37');  
  cy.openProfile(); //Navigates to profile page
 });

it('Opens Security tab and Verifies Change Password modal',()=>{
  // Click on the Security tab
  cy.wait(2000)
cy.get('#tab-1 > .MuiBox-root').click();
//     // Click the Change Password button
  cy.contains('button', 'Change Password').click();



  // Fill in the password fields
cy.get('[name="oldPassword"]').type('Veramykels@35');  // old password
cy.wait(1000)
cy.get('[name="newPassword"]').type('Veramykels@37');      // new password
cy.wait(1000)
cy.get('[name="confirmNewPassword"]').type('Veramykels@37');  // confirm
cy.wait(1000)
cy.get('button').contains('Confirm').click()
cy.get('.custom-toast').contains('Current password is incorrect')
.should('be.visible')
// cy.get(".MuiDialogActions-root.MuiDialogActions-spacing.css-r3e6m7").click();

});











});

