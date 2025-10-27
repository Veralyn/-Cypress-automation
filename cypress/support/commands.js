/// <reference types="cypress" />

// 🔹 Custom login command
Cypress.Commands.add('login', () => {
  cy.visit('/'); // navigates to base URL (from cypress.config.js)

  // Verify login page loaded
  cy.get('.css-1ustznl').should('have.text', 'Login');

  // Enter login credentials
  cy.get('[name="emailOrHRTag"]').type('vomichael@sidmach.com');
  cy.get('[name="password"]').type('Veramykels@37');

  // Click the login button
  cy.contains('button', 'Log in').click();
});

// 🔹 Custom command to open Profile page
Cypress.Commands.add('openProfile', () => {
  cy.wait(6000);
  cy.get('.css-10x3rso > .MuiBox-root > .MuiAvatar-root > .MuiAvatar-img').click();
  cy.wait(2000);
  cy.get('.MuiPopover-root > .MuiPaper-root > :nth-child(1) > .MuiTypography-root').click();

  cy.contains('General').should('exist');
  cy.contains('Security').should('exist');
 cy.wait(6000)
});

// 🔹 Custom command to open Dashboard dropdown
Cypress.Commands.add('openDashboardDropdown', () => {
  cy.get('.css-3a3hw0').click();
});


// 🔹 Custom command to open EmployeeLeave
Cypress.Commands.add('openEmployeeLeave', () => {
  cy.wait(6000)
  cy.get('.MuiToolbar-root > .MuiButtonBase-root').click();
});

































// /// <reference types="cypress" />

// // 🔹 Custom login command
// Cypress.Commands.add('login', () => {
//   cy.visit('/'); // navigates to base URL (from cypress.config.js)

//   // Verify login page loaded
//   cy.get('.css-1ustznl').should('have.text', 'Login');

//   // Enter login credentials
//   cy.get('[name="emailOrHRTag"]').type('vomichael@sidmach.com');
//   cy.get('[name="password"]').type('Veramykels@37');


//   // Click the login button
//   cy.contains('button', 'Log in').click();

//   // Wait for dashboard to load (optional)


// });


// // 🔹 Custom command to open Profile page
// Cypress.Commands.add('openProfile', () => {
//   // Click profile avatar
//   cy.wait(1000)
//   cy.get('.css-10x3rso > .MuiBox-root > .MuiAvatar-root > .MuiAvatar-img').click();

//   // Click "Profile" in dropdown
//   cy.wait(2000)
//   cy.get('.MuiPopover-root > .MuiPaper-root > :nth-child(1) > .MuiTypography-root').click();

//   // Verify Profile tabs
//   cy.contains('General').should('exist');
//   cy.contains('Security').should('exist');

//   // Optional wait for page elements to fully render
//   cy.wait(4000);
// });

// //Custom commmand to open Dashboard menu//
// Cypress.Commands.add('openDashboardDropdown', () => {
//   cy.get('.css-3a3hw0').click();
// });
