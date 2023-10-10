import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../components/navbar/navbar';
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  it('renders the Navbar component', () => {
    const { getByText } = render(<Navbar />);

    expect(getByText('Swapi.com')).toBeInTheDocument();
    expect(getByText('Planets')).toBeInTheDocument();
    expect(getByText('Wishlist')).toBeInTheDocument();
  });

  it('navigates to the correct URLs', () => {
    const { getByText } = render(<Navbar />);

    const planetsLink = getByText('Planets');
    const wishlistLink = getByText('Wishlist');

    expect(planetsLink.getAttribute('href')).toBe('/');
    expect(wishlistLink.getAttribute('href')).toBe('/wishlist');
  });
});
