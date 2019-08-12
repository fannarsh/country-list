import { test } from 'tap'
import { getNames } from '../country-list.js'
import data from '../data.json'

test('get all country names', function (t) {
  t.equal(getNames().length, data.length, 'country names should be as many as countries')
  t.ok(getNames().indexOf('Iceland') > -1, 'country names should include Iceland')
  t.ok(getNames().indexOf('iceland') === -1, 'country names is case-sensitive, does not include iceland')
  t.type(getNames(), Array, 'name list is an array')
  t.end()
})
