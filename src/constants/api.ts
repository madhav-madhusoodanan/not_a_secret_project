import axios from 'axios';

// baseURL: 'http://verse.eba-nd3brfau.us-east-2.elasticbeanstalk.com',
const instance = axios.create({
  baseURL: 'https://75ad-123-201-68-177.ngrok.io',
});
export default instance;
