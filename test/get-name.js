'use strict';

var test = require('tap').test;
var countries = require('../')();

test('get name from country code', function(t) {
  t.equal(countries.getName('IS'), 'Iceland', 'code "IS" should return Iceland');
  t.equal(countries.getName('is'), 'Iceland', 'code "is" should return Iceland');
  t.type(countries.getName('IS'), 'string', 'type of code "IS" is string');
  t.type(countries.getName('Iceland'), 'undefined', 'code "Iceland" should return undefined');
  t.type(countries.getName('XX'), 'undefined', 'code "XX" should return undefined');
  t.type(countries.getName(''), 'undefined', 'empty code should return undefined');
  t.end();
});
