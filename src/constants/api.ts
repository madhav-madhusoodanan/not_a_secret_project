import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://d440-2400-1a00-b050-5c72-65b0-45f3-cd96-b905.ngrok.io',
});
export default instance;
