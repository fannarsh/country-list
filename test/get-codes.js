'use strict'

var { test } = require('tap')
var { getCodes } = require('../')
var data = require('../data.json')

test('get all country codes', function (t) {
  t.equal(getCodes().length, data.length, 'codes should be as many as countries')
  t.ok(getCodes().indexOf('IS') > -1, 'codes should include IS')
  t.ok(getCodes().indexOf('is') === -1, 'codes is case-sensitive, does not include is')
  t.type(getCodes(), Array, 'code list is an array')
  t.end()
})
