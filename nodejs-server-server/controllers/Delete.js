'use strict';

var utils = require('../utils/writer.js');
var Delete = require('../service/DeleteService');

module.exports.deleteFavoritePassenger = function deleteFavoritePassenger (req, res, next) {
  var idMember = req.swagger.params['idMember'].value;
  var id = req.swagger.params['id'].value;
  Delete.deleteFavoritePassenger(idMember,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
