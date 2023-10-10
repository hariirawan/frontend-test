import React from 'react';
import { render } from '@testing-library/react';
import CardPlanet from './card-planet';

import '@testing-library/jest-dom';
import { IPlanet } from '../../interfaces/inteface-planets';

describe('CardPlanet test', () => {
  const mockPlanet: IPlanet = {
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

  test('CardPlanet renders with planet data', () => {
    const { getByText } = render(<CardPlanet planet={mockPlanet} />);

    // Assert that the component renders with the correct planet data
    expect(getByText(mockPlanet.name)).toBeInTheDocument();
    expect(getByText('Climate')).toBeInTheDocument();
    expect(getByText(mockPlanet.climate)).toBeInTheDocument();
    expect(getByText('Diameter')).toBeInTheDocument();
    expect(getByText(mockPlanet.diameter)).toBeInTheDocument();
    expect(getByText('Gravity')).toBeInTheDocument();
    expect(getByText(mockPlanet.gravity)).toBeInTheDocument();
    expect(getByText('Surface Water')).toBeInTheDocument();
    expect(getByText(mockPlanet.surface_water)).toBeInTheDocument();
    expect(getByText('Terrain')).toBeInTheDocument();
    expect(getByText(mockPlanet.terrain)).toBeInTheDocument();
  });

  test('CardPlanet links to the correct detail URL', () => {
    const { container } = render(<CardPlanet planet={mockPlanet} />);

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', `/detail?url=${mockPlanet.url}`);
  });
});
