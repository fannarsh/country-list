# country-list

Maps ISO 3166-1-alpha-2 codes to English country names and vice versa.

Uses data from http://data.okfn.org/data/country-list

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Example

``` js
var countries = require('country-list')();

console.log(countries.getName('IS')); // Iceland
console.log(countries.getCode('Iceland')); // IS
```

## Methods

Usage:

``` js
var countries = require('country-list')();
```
All input is case-insensitive.

### getName(code)

Expects a two-digit country code.
Returns the name for that country.
If not found, it returns `undefined`.

### getCode(name)

Expects the English country name.
Returns the code for that country.
If not found, it returns `undefined`.

### getNames()

Returns an array of all country names.

### getCodes()

Returns an array of all country codes.

### getNameList()

Returns a key-value object of all countries using the name as key.

### getCodeList()

Returns a key-value object of all countries using the code as key.

### getData()

Returns an array of all country information, in the same format as it gets imported.

## Install

``` cli
npm install country-list
```

## License

MIT
