import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://3c57-123-201-68-231.ngrok.io',
});
export default instance;
