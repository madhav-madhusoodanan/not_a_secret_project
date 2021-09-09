import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6ba8-2400-1a00-b050-3985-39b6-7353-5f9c-8f9f.ngrok.io',
});
export default instance;
