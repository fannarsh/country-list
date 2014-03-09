'use strict';

var test = require('tap').test;
var countries = require('../')();
var data = require('../data.json');

test('get all country names', function(t) {
  t.equal(countries.getData().length, data.length, 'data list should be the same lenght as data.json');
  t.type(countries.getData(), Array, 'data list is an array');
  t.type(countries.getData()[0], Object, 'first item in list should be object');
  t.end();
});
