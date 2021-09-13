import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://verse.eba-nd3brfau.us-east-2.elasticbeanstalk.com',
});
export default instance;
