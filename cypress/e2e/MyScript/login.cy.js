




/// <reference types="cypress" />

describe('Login Page Test', () => {

  it('Logs in successfully and verifies dashboard sections', () => {

    // Navigate to the website
    cy.visit('/');

    // Verify that the login page loaded correctly
    cy.get('.css-1ustznl').should('have.text', 'Login');

    // Enter login credentials
  cy.get('[name="emailOrHRTag"]').type('vomichael@sidmach.com');
  cy.get('[name="password"]').type('Veramykels@37');

    // Click the login button
    cy.contains('button', 'Log in').click();

    // Wait for the dashboard to load
      cy.wait(10000);

    // Verify key sections are visible after login
    cy.contains('Personal Details').should('exist');
    cy.contains('Announcement').should('exist');
    cy.contains('Activities').should('exist');
    cy.contains('Birthdays').should('exist');

    // Click the "Show More" button under Birthdays
    cy.contains('Show More').first().click();

  });

});




