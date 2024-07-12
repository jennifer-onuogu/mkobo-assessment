import LoginPage from '../support/pageObjects/loginPage';

describe('Login Test', () => {
  beforeEach(() => {
    LoginPage.visit(); // Visit the login page before each test
  });

  it('should login successfully', () => {
    const email = 'payrollprocessors@yopmail.com'; // Replace with your actual email
    const password = 'Mkobo@123'; // Replace with your actual password

    LoginPage
      .fillEmail(email)
      .fillPassword(password)
      .submit();

    // Add assertions to verify successful login
    cy.contains('Dashboard').should('be.visible'); // Example: Check for a dashboard element after login
  });
});
