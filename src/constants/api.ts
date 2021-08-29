import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://1e23-123-201-70-91.ngrok.io',
});
export default instance;
