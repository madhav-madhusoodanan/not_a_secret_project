import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64d7-123-201-68-106.ngrok.io',
});
export default instance;
