'use strict'

var data = require('./data.json');

module.exports = CountryList;
function CountryList() {
  if (!(this instanceof CountryList)) return new CountryList();
};

CountryList.prototype.getCode = function getCode(name) {
  var found;
  data.some(function(country) {
    if (country.Name.toLowerCase() === name.toLowerCase()) return found = country.Code;
  });
  return found;
};

CountryList.prototype.getName = function getName(code) {
  var found;
  data.some(function(country) {
    if (country.Code === code.toUpperCase()) return found = country.Name;
  });
  return found;
};
