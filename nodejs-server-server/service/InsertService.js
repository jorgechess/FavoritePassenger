'use strict';


/**
 * Insert member's favorite passengers.
 * Register a new member's favorite passenger.
 *
 * idMember String Member id.
 * favoritePassenger Passenger 
 * returns Passenger
 **/
exports.insertFavoritePassenger = function(idMember,favoritePassenger) {
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
  "id" : 0,
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

