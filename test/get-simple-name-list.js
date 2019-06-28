'use strict'

var test = require('tap').test
var countries = require('../')
var data = require('../data.json')

test('get all simple country names with code as key', function (t) {
  var list = countries.getSimpleNameList()

  t.type(list, Object, 'country name list is an object')
  t.equal(Object.keys(list).length, data.length, 'country name list should be as many as countries')
  t.equal(list['aland islands'], 'AX', 'aland islands must be equal to AX code')
  t.end()
})
