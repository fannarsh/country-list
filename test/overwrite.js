'use strict'

const { test } = require('tap')
const { overwrite, getData, getName } = require('../')

const correctedTW = {
  code: 'TW',
  name: 'Taiwan'
}

test('Handle non overwrite', t => {
  t.ok(overwrite(), 'Shouldn\'t do anything without countries map')
  t.end()
})

test('Get overwritten name from country code', t => {
  overwrite([correctedTW])
  t.equal(getData()[217], correctedTW, 'Should be the new country object')
  t.equal(getName('TW'), 'Taiwan', 'code "TW" should now return Taiwan')
  t.end()
})
