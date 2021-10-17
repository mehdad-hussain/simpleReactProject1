import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    // "Content-Type": "application/json",
    // "X-Requested-With": "XMLHttpRequest",
    // "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
