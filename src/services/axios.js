import axios from "axios";
import { getCookie } from "../util/helper";

const BASE_URL = "https://clothing-store-nu.vercel.app";

export default axios.create({ baseURL: BASE_URL });
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Hamada__${JSON.parse(localStorage.getItem("user"))?.token}`,
  },
});
export const jsonServer = axios.create({
  baseURL: "https://ecommerce-api-roan-psi.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});
