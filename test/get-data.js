import { test } from 'tape'
import { getData } from '../country-list.js'
import data from '../data.json'

test('get all country names', function (t) {
  t.equal(getData().length, data.length, 'data list should be the same lenght as data.json')
  t.ok(getData() instanceof Array, 'data list is an array')
  t.ok(getData()[0] instanceof Object, 'first item in list should be object')
  t.end()
})
