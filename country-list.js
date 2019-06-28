'use strict'

var data = require('./data.json')
var removeDiacritics = require('diacritics').remove

/** Precompute name and code lookups. */
var nameMap = {}
var simpleNameMap = {}
var codeMap = {}
data.forEach(mapCodeAndName)

function mapCodeAndName (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
  simpleNameMap[removeDiacritics(country.name.toLowerCase())] = country.code
}

exports.overwrite = function overwrite (countries) {
  if (!countries || !countries.length) return
  countries.forEach(function (country) {
    var foundIndex = data.findIndex(function (item) {
      return item.code === country.code
    })
    data[foundIndex] = country
    mapCodeAndName(country)
  })
}

exports.getCode = function getCode (name) {
  return nameMap[name.toLowerCase()]
}

exports.getCodeSimple = function getCodeSimple (name) {
  return simpleNameMap[removeDiacritics(name).toLowerCase()]
}

exports.getName = function getName (code) {
  return codeMap[code.toLowerCase()]
}

exports.getNames = function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

exports.getCodes = function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

exports.getCodeList = function getCodeList () {
  return codeMap
}

exports.getNameList = function getNameList () {
  return nameMap
}

exports.getSimpleNameList = function getSimpleNameList () {
  return simpleNameMap
}

exports.getData = function getData () {
  return data
}
