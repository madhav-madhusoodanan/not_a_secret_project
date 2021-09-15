import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://verse.eba-nd3brfau.us-east-2.elasticbeanstalk.com',
  baseURL: 'https://57ae-43-241-145-207.ngrok.io',
});
export default instance;
