import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://d9ec-219-91-190-171.ngrok.io',
});
export default instance;
