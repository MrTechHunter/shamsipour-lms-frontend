import axios from "axios";

export default axios.create({
  baseURL: "https://shamsipour-lms-backend.vercel.app/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});