"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var axiosInstance = _axios["default"].create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar"
  }
}); // Make a request for retrieve a list of statuses


axiosInstance.get("/statuses").then(function (response) {
  // handle success
  console.log(response);
})["catch"](function (error) {
  // handle error
  console.log(error);
}).then(function () {// always executed
});