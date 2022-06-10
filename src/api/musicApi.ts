import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_API

const musicApi = axios.create({
  baseURL
})

export default musicApi