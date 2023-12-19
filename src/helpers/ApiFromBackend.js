import axios from "axios"

//Backend en ambiente productivo
export const apiFromBackend = axios.create({
  baseURL: "https://mts-destinomx.up.railway.app",
  withCredentials: true,
})
