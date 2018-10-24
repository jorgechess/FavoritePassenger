'use strict';

var utils = require('../utils/writer.js');
var API = require('../service/APIService');

module.exports.readme = function readme (req, res, next) {
  API.readme()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
