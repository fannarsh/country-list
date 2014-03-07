'use strict'

var data = require('./data.json');

/**
 * Precompute name and code lookups.
 */
var nameMap = {};
var codeMap = {};
data.forEach(function(country) {
  nameMap[country.Name.toLowerCase()] = country.Code;
  codeMap[country.Code.toLowerCase()] = country.Name;
});

module.exports = CountryList;
function CountryList() {
  if (!(this instanceof CountryList)) return new CountryList();
};

CountryList.prototype.getCode = function getCode(name) {
  return nameMap[name.toLowerCase()];
};

CountryList.prototype.getName = function getName(code) {
  return codeMap[code.toLowerCase()];
};
