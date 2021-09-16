import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://verse-env.eba-z9bzwkeq.ap-south-1.elasticbeanstalk.com',
  // baseURL: 'https://57ae-43-241-145-207.ngrok.io',
});
export default instance;
