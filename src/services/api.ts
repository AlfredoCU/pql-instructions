import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.API_HOST,
  headers: { "Content-Type": "application/json" }
});

export default api;
