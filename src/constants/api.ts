import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://baa126039876.ngrok.io',
});
export default instance;
