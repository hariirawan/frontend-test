export interface IRespPlanet {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPlanet[];
}

export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
  edited: string;
}
