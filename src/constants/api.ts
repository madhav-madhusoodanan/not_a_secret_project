import axios from "axios";

const instance = axios.create({
  baseURL: "https://6efda16d3cfe.ngrok.io",
});
export default instance;
