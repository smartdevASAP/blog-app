import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", //server.url,//base url
  withCredentials: true, //  for cookies
});

export default api;
