import axios from "axios";

export default axios.create({
//   the URL most be change every time running ngrok 
  baseURL: "http://b25ca5760190.ngrok.io",
});
