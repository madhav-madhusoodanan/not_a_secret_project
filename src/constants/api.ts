import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cedc-5-36-200-5.ngrok.io',
});
export default instance;
