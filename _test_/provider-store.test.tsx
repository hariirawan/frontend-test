import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StoreProvider, useWishlist } from '../provider/provider-store'; // Gantilah 'path-to-your-components' dengan path yang benar

describe('StoreProvider', () => {
  it('should add an item to the wishlist', () => {
    const TestComponent = () => {
      const { wishlist, addWishlist } = useWishlist();

      const planet = {
        name: 'Tatooine',
        climate: 'Arid',
        diameter: '10465',
        gravity: '1 standard',
        surface_water: '1',
        terrain: 'Desert',
        url: 'https://example.com/planets/1',
        created: '',
        rotation_period: '',
        orbital_period: '',
        population: '',
        edited: ''
      };
      const planetName = planet.name;

      return (
        <div>
          <button onClick={() => addWishlist(planet)}>Add to Wishlist</button>
          <div data-testid="wishlist">{wishlist.length}</div>
          <div data-testid="planet-name">{planetName}</div>
        </div>
      );
    };

    const { getByText, getByTestId } = render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>
    );

    // Initial wishlist length should be 0
    expect(getByTestId('wishlist').textContent).toBe('0');

    // Click the button to add an item to the wishlist
    fireEvent.click(getByText('Add to Wishlist'));

    // Wishlist length should now be 1
    expect(getByTestId('wishlist').textContent).toBe('1');

    // Check if the correct planet name is displayed
    expect(getByTestId('planet-name').textContent).toBe('Tatooine');
  });
});
