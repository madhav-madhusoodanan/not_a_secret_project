import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://3fe9-123-201-67-20.ngrok.io',
});
export default instance;
