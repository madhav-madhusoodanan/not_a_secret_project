import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://3b35-2400-1a00-b050-5c72-5d0d-ab7-c78b-795f.ngrok.io',
});
export default instance;
