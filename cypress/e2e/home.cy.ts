describe('Home Page', () => {
    it('loads and displays a list of planets', () => {
      cy.visit('/'); 
    });
  
    it('loads more planets on scroll', () => {
      cy.visit('/'); 
  
      cy.scrollTo('bottom');
    });
});
  