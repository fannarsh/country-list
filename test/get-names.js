'use strict';

var test = require('tap').test;
var countries = require('../')();
var data = require('../data.json');

test('get all country names', function(t) {
  t.equal(countries.getNames().length, data.length, 'country names should be as many as countries');
  t.ok(countries.getNames().indexOf('Iceland') > -1, 'country names should include Iceland');
  t.ok(countries.getNames().indexOf('iceland') === -1, 'country names is case-sensitive, does not include iceland');
  t.type(countries.getNames(), Array, 'name list is an array');
  t.end();
});
