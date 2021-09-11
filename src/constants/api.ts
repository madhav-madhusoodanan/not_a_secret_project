import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://4dcf-123-201-65-139.ngrok.io',
});
export default instance;
