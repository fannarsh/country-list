'use strict'

var { test } = require('tap')
var { getCode } = require('../')

test('get code from country name', function (t) {
  t.equal(getCode('Iceland'), 'IS', 'name "Iceland" should return IS')
  t.equal(getCode('iceland'), 'IS', 'name "iceland" should return IS')
  t.equal(getCode('ICELAND'), 'IS', 'name "ICELAND" should return IS')
  t.type(getCode('Iceland'), 'string', 'type of name "Iceland" is string')
  t.type(getCode('IS'), 'undefined', 'type of name "IS" is undefined')
  t.type(getCode('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined')
  t.type(getCode(''), 'undefined', 'empty name should return undefined')
  t.end()
})
