import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://f6bc-123-201-70-51.ngrok.io',
});
export default instance;
