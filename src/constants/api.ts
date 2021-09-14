import axios from 'axios';

// baseURL: 'http://verse.eba-nd3brfau.us-east-2.elasticbeanstalk.com',
const instance = axios.create({
  baseURL: 'https://9489-43-241-145-207.ngrok.io',
});
export default instance;
