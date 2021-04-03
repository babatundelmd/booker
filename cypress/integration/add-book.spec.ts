describe('create new view', () => {
  beforeEach(() => {
    cy.viewport(300, 600);
  });

  it('should load add book component', () => {
    const expectedTitle = '📚 Add A Book ';
    cy.visit('/add-book');
    // ...more commands...
    cy.matchImageSnapshot(); // create image snapshot and compare with baseline
  });
});
