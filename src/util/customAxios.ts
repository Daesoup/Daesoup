import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://43.201.183.136:3000",
});

export default customAxios;
