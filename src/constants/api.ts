import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://55bf-2400-1a00-b050-5c72-cc12-8ea4-92ff-2d1b.ngrok.io',
});
export default instance;
