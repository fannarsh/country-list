import data from './data.json'

/** Precompute name and code lookups. */
var nameMap = {}
var codeMap = {}
data.forEach(mapCodeAndName)

function mapCodeAndName (country) {
  nameMap[country.name.toLowerCase()] = country.code
  codeMap[country.code.toLowerCase()] = country.name
}

export function overwrite (countries) {
  if (!countries || !countries.length) return
  countries.forEach(function (country) {
    var foundIndex = data.findIndex(function (item) {
      return item.code === country.code
    })
    data[foundIndex] = country
    mapCodeAndName(country)
  })
}

export function getCode (name) {
  return nameMap[name.toLowerCase()]
}

export function getName (code) {
  return codeMap[code.toLowerCase()]
}

export function getNames () {
  return data.map(function (country) {
    return country.name
  })
}

export function getCodes () {
  return data.map(function (country) {
    return country.code
  })
}

export function getCodeList () {
  return codeMap
}

export function getNameList () {
  return nameMap
}

export function getData () {
  return data
}
