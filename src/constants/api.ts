import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ee90-219-91-196-32.ngrok.io',
});
export default instance;
