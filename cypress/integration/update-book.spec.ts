describe('create new view', () => {
  beforeEach(() => {
    cy.viewport(300, 600);
  });

  it('should load update component', () => {
    const expectedTitle = '📚 Lend A Book';
    cy.visit('/update-book/:id');
    // ...more commands...
    cy.matchImageSnapshot(); // create image snapshot and compare with baseline
  });
});
