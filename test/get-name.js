import { test } from 'tape'
import { getName } from '../country-list.js'

test('get name from country code', function (t) {
  t.equal(getName('IS'), 'Iceland', 'code "IS" should return Iceland')
  t.equal(getName('is'), 'Iceland', 'code "is" should return Iceland')
  t.equal(typeof getName('IS'), 'string', 'type of code "IS" is string')
  t.equal(typeof getName('Iceland'), 'undefined', 'code "Iceland" should return undefined')
  t.equal(typeof getName('XX'), 'undefined', 'code "XX" should return undefined')
  t.equal(typeof getName(''), 'undefined', 'empty code should return undefined')
  t.end()
})
