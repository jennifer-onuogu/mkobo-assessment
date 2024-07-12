class LoginPage {
    visit() {
      cy.visit('http://46.101.32.157:5000/auth/login'); // Replace with your login page URL
    }
  
    fillEmail(value) {
      const field = cy.get('.gap-6 > :nth-child(1) > .flex > .w-full');
      field.clear();
      field.type(value);
      return this;
    }
  
    fillPassword(value) {
      const field = cy.get('.w-11\\/12');
      field.clear();
      field.type(value);
      return this;
    }
  
    submit() {
      const button = cy.get('.gap-6 > .text-white');
      button.click();
    }
  }
  
  export default new LoginPage();
  