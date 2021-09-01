import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://0efe-2400-1a00-b050-5c72-b1d0-9126-a61b-c3b.ngrok.io',
});
export default instance;
