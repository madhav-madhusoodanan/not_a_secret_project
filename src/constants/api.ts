import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://fdd16853d912.ngrok.io',
});
export default instance;
