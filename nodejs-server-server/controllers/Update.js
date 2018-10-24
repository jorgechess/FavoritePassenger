'use strict';

var utils = require('../utils/writer.js');
var Update = require('../service/UpdateService');

module.exports.updateFavoritePassenger = function updateFavoritePassenger (req, res, next) {
  var idMember = req.swagger.params['idMember'].value;
  var id = req.swagger.params['id'].value;
  var favoritePassenger = req.swagger.params['favoritePassenger'].value;
  Update.updateFavoritePassenger(idMember,id,favoritePassenger)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
