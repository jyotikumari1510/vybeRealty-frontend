import axios from "axios";

const api = axios.create({
  baseURL: "https://vercel.com/jyotis-projects-d1a02276/vr-backend/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
