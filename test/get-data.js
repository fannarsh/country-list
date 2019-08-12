import { test } from 'tap'
import { getData } from '../country-list.js'
import data from '../data.json'

test('get all country names', function (t) {
  t.equal(getData().length, data.length, 'data list should be the same lenght as data.json')
  t.type(getData(), Array, 'data list is an array')
  t.type(getData()[0], Object, 'first item in list should be object')
  t.end()
})
