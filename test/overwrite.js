import { test } from 'tap'
import { overwrite, getData, getName } from '../country-list.js'

const correctedTW = {
  code: 'TW',
  name: 'Taiwan'
}

test('Handle non overwrite', t => {
  const currentCountries = getData()
  overwrite()
  const newCountries = getData()
  t.equal(currentCountries, newCountries, 'Shouldn\'t do anything without countries map')
  t.end()
})

test('Get overwritten name from country code', t => {
  overwrite([correctedTW])
  t.equal(getData()[217], correctedTW, 'Should be the new country object')
  t.equal(getName('TW'), 'Taiwan', 'code "TW" should now return Taiwan')
  t.end()
})
