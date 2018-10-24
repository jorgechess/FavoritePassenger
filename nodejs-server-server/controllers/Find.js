'use strict';

var utils = require('../utils/writer.js');
var Find = require('../service/FindService');

module.exports.findByIdMember = function findByIdMember (req, res, next) {
  var idMember = req.swagger.params['idMember'].value;
  var numberDoc = req.swagger.params['numberDoc'].value;
  Find.findByIdMember(idMember,numberDoc)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPassengerById = function findPassengerById (req, res, next) {
  var idMember = req.swagger.params['idMember'].value;
  var id = req.swagger.params['id'].value;
  Find.findPassengerById(idMember,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
