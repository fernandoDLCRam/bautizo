import axios from "axios";
require("dotenv").config();

export const RutaApi = axios.create({
  //NOTE: Aqui va la URL de la API, cambiar el string por la URL a utilizar
  //baseURL: "http://localhost:4000/",
  baseURL: "https://ramonaapi.onrender.com/",
  headers: {"Authorization": `Bearer ${process.env.VITE_API_KEY}`},
  
});
