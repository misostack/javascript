import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.baseURL || "https://misostack.herokuapp.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
// Make a request for retrieve a list of statuses
axiosInstance
  .get("/statuses")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
