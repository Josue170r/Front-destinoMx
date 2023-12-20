import axios from "axios"

//Backend en ambiente productivo
export const apiFromBackend = axios.create({
  baseURL: "http://localhost:4000/",
  withCredentials: true,
})
