import { test } from 'tape'
import { getCode } from '../country-list.js'

test('get code from country name', function (t) {
  t.equal(getCode('Iceland'), 'IS', 'name "Iceland" should return IS')
  t.equal(getCode('iceland'), 'IS', 'name "iceland" should return IS')
  t.equal(getCode('ICELAND'), 'IS', 'name "ICELAND" should return IS')
  t.equal(typeof getCode('Iceland'), 'string', 'type of name "Iceland" is string')
  t.equal(typeof getCode('IS'), 'undefined', 'type of name "IS" is undefined')
  t.equal(typeof getCode('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined')
  t.equal(typeof getCode(''), 'undefined', 'empty name should return undefined')
  t.end()
})
