import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ce16-2400-1a00-b050-5c72-e435-9e68-56ae-a8d9.ngrok.io',
});
export default instance;
