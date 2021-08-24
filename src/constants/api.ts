import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://c12b-219-91-191-168.ngrok.io',
});
export default instance;
