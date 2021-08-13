import axios from "axios";

const instance = axios.create({
  baseURL: "https://e242c40901f6.ngrok.io",
});
export default instance;
