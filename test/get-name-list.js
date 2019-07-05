'use strict'

var { test } = require('tap')
var { getNameList } = require('../')
var data = require('../data.json')

test('get all country names with code as key', function (t) {
  var list = getNameList()

  t.type(list, Object, 'country name list is an object')
  t.equal(Object.keys(list).length, data.length, 'country name list should be as many as countries')
  t.equal(list['iceland'], 'IS', 'Iceland must be equal to IS code')
  t.end()
})
