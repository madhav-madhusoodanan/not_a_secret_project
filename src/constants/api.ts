import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aaa5-123-201-65-241.ngrok.io',
});
export default instance;
