import axios from "axios";

const instance = axios.create({
  baseURL: "https://fcf5d4b361dd.ngrok.io",
});
export default instance;
