import axios from 'axios';

export function pokemonesAxiosService() {
  return axios
    .get('https://pokeapi.co/api/v2', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .then((res) => res.data);
}
