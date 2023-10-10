import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4 mb-4">
      <div className="max-w-2xl mx-auto flex flex-row space-x-4 text-white">
        <h1>Swapi.com</h1>
        <ul className="flex flex-row space-x-4">
          <li>
            <Link href={'/'}>Planets</Link>
          </li>
          <li>
            <Link href={'/wishlist'}>Wishlist</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
