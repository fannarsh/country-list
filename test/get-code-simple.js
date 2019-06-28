'use strict'

var test = require('tap').test
var countries = require('../')

test('get code from simple country name', function (t) {
  t.equal(countries.getCodeSimple('aland islands'), 'AX', 'name "aland islands" should return AX')
  t.equal(countries.getCodeSimple('Cote d\'Ivoire'), 'CI', 'name "Cote d\'Ivoire" should return CI')
  t.type(countries.getCodeSimple('CI'), 'undefined', 'type of name "CI" is undefined')
  t.type(countries.getCodeSimple('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined')
  t.type(countries.getCodeSimple(''), 'undefined', 'empty name should return undefined')
  t.end()
})
