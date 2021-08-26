import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://a8f6-219-91-190-120.ngrok.io',
});
export default instance;
