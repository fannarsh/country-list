import { test } from 'tap'
import { getCodeList } from '../country-list.js'
import data from '../data.json'

test('get all country names with code as key', function (t) {
  var list = getCodeList()

  t.type(list, Object, 'country list is an object')
  t.equal(Object.keys(list).length, data.length, 'country list should be as many as countries')
  t.equal(list['is'], 'Iceland', 'IS code must be equal to Iceland')
  t.end()
})
