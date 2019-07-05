'use strict'

var { test } = require('tap')
var { getName } = require('../')

test('get name from country code', function (t) {
  t.equal(getName('IS'), 'Iceland', 'code "IS" should return Iceland')
  t.equal(getName('is'), 'Iceland', 'code "is" should return Iceland')
  t.type(getName('IS'), 'string', 'type of code "IS" is string')
  t.type(getName('Iceland'), 'undefined', 'code "Iceland" should return undefined')
  t.type(getName('XX'), 'undefined', 'code "XX" should return undefined')
  t.type(getName(''), 'undefined', 'empty code should return undefined')
  t.end()
})
