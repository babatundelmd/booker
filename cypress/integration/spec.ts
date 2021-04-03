describe('create new view', () => {
  beforeEach(() => {
    cy.viewport(300, 600);
  });

  it('should load the home component', () => {
    const expectedTitle = 'Booker ::: Improve Your Mind 🧘🏿‍♂️';
    cy.visit('http://localhost:5000');
    cy.get('.container');
    cy.get('.table');

    // ...more commands...
    cy.matchImageSnapshot(); // create image snapshot and compare with baseline
  });
});
