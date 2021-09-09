import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://b4b0-2400-1a00-b050-3985-f004-b4dc-c6e6-5028.ngrok.io',
});
export default instance;
