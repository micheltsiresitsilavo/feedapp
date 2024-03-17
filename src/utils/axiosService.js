import axios from "axios";

const axios_instance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

export default axios_instance;
