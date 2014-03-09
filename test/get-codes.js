'use strict';

var test = require('tap').test;
var countries = require('../')();
var data = require('../data.json');

test('get all country codes', function(t) {
  t.equal(countries.getCodes().length, data.length, 'codes should be as many as countries');
  t.ok(countries.getCodes().indexOf('IS') > -1, 'codes should include IS');
  t.ok(countries.getCodes().indexOf('is') === -1, 'codes is case-sensitive, does not include is');
  t.type(countries.getCodes(), Array, 'code list is an array');
  t.end();
});
