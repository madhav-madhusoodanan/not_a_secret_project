import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6abd-27-34-12-36.ngrok.io',
});
export default instance;
