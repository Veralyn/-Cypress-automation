/// <reference types = "cypress"/> 

describe('Profile Page Test', () => {      // ✅ Test suite starts here

  // Runs before each test — logs in first
  beforeEach(() => {
    cy.login();    // ✅ inside describe(), runs before every test
  });

  it('Navigates to Profile and verifies tabs', () => {   // ✅ Actual test starts here
    cy.wait(6000);
    // Clicks on profile avatar
    cy.get('.css-10x3rso > .MuiBox-root > .MuiAvatar-root > .MuiAvatar-img').click();
 cy.wait(6000);
    // Clicks on profile text
    cy.get('.MuiPopover-root > .MuiPaper-root > :nth-child(1) > .MuiTypography-root').click();

    // Verifies the "General" and "Security" tabs exist
    cy.contains('General').should('exist');
    cy.contains('Security').should('exist');

    // Opens the security tabz
    cy.get('#tab-1 > .MuiBox-root').click();

    // Verifies "Change Password" text exists
    cy.contains('Change Password').should('exist');

    // Clicks the "Change Password" button
    cy.get('#\\:r6\\:').click();
  });

});     // ✅ describe() ends here




//     // Click profile avatar
//     cy.get('.css-10x3rso > .MuiBox-root > .MuiAvatar-root > .MuiAvatar-img').click();

//     // Click on "Profile" text
//     cy.get('.MuiPopover-root > .MuiPaper-root > :nth-child(1) > .MuiTypography-root').click();

//     // Verify the "General" and "Security" tabs exist
//     cy.contains('General').should('exist');
//     cy.contains('Security').should('exist');
//   });

// });


// // clicks on profile avatar
// cy.get('.css-10x3rso > .MuiBox-root > .MuiAvatar-root > .MuiAvatar-img').click();
// //clicks on profile text
// cy.get('.MuiPopover-root > .MuiPaper-root > :nth-child(1) > .MuiTypography-root').click();
// //verifies the general and security text if it exisit
// cy.contains('General').should('exist')
// cy.contains('Security').should('exist')
// //opens the security text
// cy.get('#tab-1 > .MuiBox-root').click();
// // Verify "Change Password" text exists
// cy.contains('Change Password').should('exist');

// // Click the "Change Password" button
// cy.get('#\\:r6\\:').click();


