'use strict';

var test = require('tap').test;
var countries = require('../')();

test('get code from country name', function(t) {
  t.equal(countries.getCode('Iceland'), 'IS', 'name "Iceland" should return IS');
  t.equal(countries.getCode('iceland'), 'IS', 'name "iceland" should return IS');
  t.equal(countries.getCode('ICELAND'), 'IS', 'name "ICELAND" should return IS');
  t.type(countries.getCode('Iceland'), 'string', 'type of name "Iceland" is string');
  t.type(countries.getCode('IS'), 'undefined', 'type of name "IS" is undefined');
  t.type(countries.getCode('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined');
  t.type(countries.getCode(''), 'undefined', 'empty name should return undefined');
  t.end();
});
