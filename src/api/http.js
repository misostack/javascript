import axios from "axios";
const baseURL = process.env.BASE_URL || "http://localhost:1337";
console.log(baseURL);
document.title = process.env.BASE_URL;
// class HTTPClient {
//   constructor({ baseURL, timeout }) {
//     this.axiosInstance = axios.create({
//       baseURL,
//       timeout: timeout || 1000,
//     });
//     console.error("[HTTPCLIENT]", "constructor");
//   }
// }

// export default HTTPClient;

// const axiosInstance = axios.create({
//   baseURL,
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });
// // Make a request for retrieve a list of statuses
// axiosInstance
//   .get("/statuses")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
