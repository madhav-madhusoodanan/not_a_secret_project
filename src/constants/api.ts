import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bfe6-123-201-70-51.ngrok.io',
});
export default instance;
