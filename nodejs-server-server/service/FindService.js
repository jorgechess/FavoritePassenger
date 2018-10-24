'use strict';


/**
 * Find favorite passengers by member's id
 * Find favorite passengers by his member's id.
 *
 * idMember String Member id.
 * numberDoc String Favorite passenger`s document number. (optional)
 * returns Passengers
 **/
exports.findByIdMember = function(idMember,numberDoc) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "firstName" : "firstName",
      "lastName" : "lastName",
      "createdAt" : "2000-01-23T04:56:07.000+00:00",
      "gender" : "gender",
      "documents" : [ {
        "issuingCountry" : "issuingCountry",
        "numberDoc" : "numberDoc",
        "tipodoc" : "tipodoc",
        "expirationDate" : "2000-01-23"
      }, {
        "issuingCountry" : "issuingCountry",
        "numberDoc" : "numberDoc",
        "tipodoc" : "tipodoc",
        "expirationDate" : "2000-01-23"
      } ],
      "idMember" : 6,
      "id" : 2,
      "birthDate" : "2000-01-23",
      "email" : "email",
      "updatedAt" : "2000-01-23T04:56:07.000+00:00",
      "status" : true
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find an existing favorite passenger by Id
 * Find an existing favorite passenger by member's id and it's Id
 *
 * idMember String Member id.
 * id Integer Favorite passenger's id.
 * returns Passenger
 **/
exports.findPassengerById = function(idMember,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "gender" : "gender",
  "documents" : [ {
    "issuingCountry" : "issuingCountry",
    "numberDoc" : "numberDoc",
    "tipodoc" : "tipodoc",
    "expirationDate" : "2000-01-23"
  }, {
    "issuingCountry" : "issuingCountry",
    "numberDoc" : "numberDoc",
    "tipodoc" : "tipodoc",
    "expirationDate" : "2000-01-23"
  } ],
  "idMember" : 6,
  "id" : 2,
  "birthDate" : "2000-01-23",
  "email" : "email",
  "updatedAt" : "2000-01-23T04:56:07.000+00:00",
  "status" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

