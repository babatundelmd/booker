describe('create new view', () => {
  beforeEach(() => {
    cy.viewport(300, 600);
  });

  it('should load lend component', () => {
    const expectedTitle = '📚 Lend A Book';
    cy.visit('/lend');
    // ...more commands...
    cy.matchImageSnapshot(); // create image snapshot and compare with baseline
  });
});
