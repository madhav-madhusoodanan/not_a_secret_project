import axios from "axios";

const instance = axios.create({
  baseURL: "https://7e045e112008.ngrok.io",
});
export default instance;
