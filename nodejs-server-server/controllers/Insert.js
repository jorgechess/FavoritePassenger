'use strict';

var utils = require('../utils/writer.js');
var Insert = require('../service/InsertService');

module.exports.insertFavoritePassenger = function insertFavoritePassenger (req, res, next) {
  var idMember = req.swagger.params['idMember'].value;
  var favoritePassenger = req.swagger.params['favoritePassenger'].value;
  Insert.insertFavoritePassenger(idMember,favoritePassenger)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
