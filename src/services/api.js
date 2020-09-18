import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shoes-out.herokuapp.com',
});

export default api;
