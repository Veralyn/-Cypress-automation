/// <reference types="cypress" />

describe('Dashboard Page Test', () => {
  // Runs before each test — logs in and navigates to the dashboard
  beforeEach(() => {
    cy.login(); // Reusable login command
    cy.wait(5000); // Give some time after login for dashboard to load
  });

  it('opens the dashboard dropdown and navigates to Employee Leave page', () => {
    // Opens dashboard dropdown
    cy.get('.MuiToolbar-root > .MuiButtonBase-root', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Wait for dropdown to appear
    cy.wait(3000);

    // Click on Employee Leave link
    cy.get('[href="/employee-leave"] > .MuiListItemText-root', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Assertions to verify navigation success
    cy.get('.MuiToolbar-root > .MuiTypography-root')
      .should('be.visible')
      .and('contain', 'Employee Leave');

    cy.get(':nth-child(1) > .css-tl7q2a > .css-dwgza1 > .css-0 > .MuiTypography-caption')
      .should('be.visible')
      .and('contain', 'Annual Leave Maximum Days');

    cy.get('.css-1sn3a2z > .MuiTypography-root')
      .should('be.visible')
      .and('contain', 'Leave');

    // Open Leave Calendar//
    cy.get('[id=":r7:"]').click();

    //Assertion for leave form//
cy.get('.css-1iroq4b', { timeout: 7000 })
  .should('be.visible')
  .and('contain.text', 'Leave Calendar');

 cy.get('.css-15v15b0').find('.MuiTypography-root' , { timeout: 7000 })
  .and('contain.text', 'Quality Assurance Team');


// Click the calendar dropdown for months
cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiSelect-select').click();

// Select the 'October' option from the dropdown
cy.contains('li', 'October').click(); // Adjust 'li' to match your dropdown item element

// Click the date you'd like to select//
cy.contains('.MuiTypography-body1', /^30$/).click({ force: true }); 

//Close the calendar modal//
cy.get('#\\:ra\\: > .MuiButtonBase-root', { timeout: 10000 }).click({ force: true });


  });
});
