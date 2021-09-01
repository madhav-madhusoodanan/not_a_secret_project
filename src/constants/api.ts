import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://2313-2400-1a00-b050-5c72-49b5-5b75-84ba-b4d7.ngrok.io',
});
export default instance;
