import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://d8e9-123-201-65-130.ngrok.io',
});
export default instance;
