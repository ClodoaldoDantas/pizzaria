import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'test'
      ? 'http://localhost:3000/api'
      : 'https://pizzariaserver.herokuapp.com/',
});
