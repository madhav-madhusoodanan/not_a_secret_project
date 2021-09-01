import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://1582-27-34-12-36.ngrok.io',
});
export default instance;
