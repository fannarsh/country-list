import { test } from 'tap'
import { getCode, getName } from '../country-list.js'

test('get code and name for country', t => {
  t.equal(getCode('Iceland'), 'IS', 'name "Iceland" should return IS')
  t.equal(getName('IS'), 'Iceland', 'code "IS" should return Iceland')
  t.end()
})
