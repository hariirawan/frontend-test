import axios from 'axios';

export const ServicePlanet = {
  get: () => {
    return axios.get('https://swapi.dev/api/planets');
  }
};
