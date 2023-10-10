
describe('Navigation', () => {
  const planetData = {
    "name": "Tatooine",
    "rotation_period": "23",
    "orbital_period": "304",
    "diameter": "10465",
    "climate": "arid",
    "gravity": "1 standard",
    "terrain": "desert",
    "surface_water": "1",
    "population": "200000",
    "created": "2014-12-09T13:50:49.641000Z",
    "edited": "2014-12-20T20:58:18.411000Z",
    "url": "https://swapi.dev/api/planets/1/"
  };

  it('should navigate to the detail page', () => {
    cy.visit(`/detail?url=${planetData.url}`);

    cy.get('h3').should('have.text', planetData.name);
    cy.contains('Climate').next().should('have.text', planetData.climate);
    cy.contains('Diameter').next().should('have.text', planetData.diameter);
    cy.contains('Gravity').next().should('have.text', planetData.gravity);
    cy.contains('Surface Water').next().should('have.text', planetData.surface_water);
    cy.contains('Terrain').next().should('have.text', planetData.terrain);


    cy.get('button').contains('Back').click();

 });

 it('adds planet to wishlist', () => {
    cy.visit(`/detail?url=${planetData.url}`);

    cy.get('button')
      .contains('Add To Wishlist')
      .click();
      
 });
})

export {}
