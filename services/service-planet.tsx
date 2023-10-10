import axios from 'axios';

export const ServicePlanet = {
  get: (page: number) => {
    return axios.get(`https://swapi.dev/api/planets?page=${page}`);
  },
  getDetail: (url: string) => {
    return axios.get(url);
  }
};
