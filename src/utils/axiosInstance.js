import axios from "axios";

const api = axios.create({
  baseURL: "https://vr-backend.vercel.app/api",
  // baseURL: "http://localhost:8001/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
