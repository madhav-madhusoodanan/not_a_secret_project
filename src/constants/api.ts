import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://9336-5-36-146-217.ngrok.io',
});
export default instance;
