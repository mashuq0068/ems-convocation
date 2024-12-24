import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.10.104:1337"
});

export default axiosInstance;
