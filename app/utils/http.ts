import axios from "axios";

export const API_KEY: string = "f2ae3abf48af4d0aa6ae145ab1a66bf6";

export const http = axios.create({
  baseURL: `https://api.opencagedata.com/geocode/v1/json`
})