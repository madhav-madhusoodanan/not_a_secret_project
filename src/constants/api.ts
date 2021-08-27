import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://f359-5-37-244-137.ngrok.io',
});
export default instance;
