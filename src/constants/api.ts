import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://f6cd199f728b.ngrok.io',
});
export default instance;
