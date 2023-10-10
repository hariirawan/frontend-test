import Link from 'next/link';
import React from 'react';
import { IPlanet } from '../../interfaces/inteface-planets';

const CardPlanet: React.FC<{ planet: IPlanet }> = ({ planet }) => (
  <React.Fragment>
    <Link href={`/detail?url=${planet.url}`}>
      <div className="border border-gray-800 p-6 rounded-md h-full">
        <h3>{planet.name}</h3>
        <strong>Climate</strong>
        <p>{planet.climate}</p>
        <strong>Diameter</strong>
        <p>{planet.diameter}</p>
        <strong>Gravity</strong>
        <p>{planet.gravity}</p>
        <strong>Surface Water</strong>
        <p>{planet.surface_water}</p>
        <strong>Terrain</strong>
        <p>{planet.terrain}</p>
      </div>
    </Link>
  </React.Fragment>
);

export default CardPlanet;
