import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://178c562489f4.ngrok.io',
});
export default instance;
