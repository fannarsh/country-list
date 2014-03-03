country-list
============

Maps ISO 3166-1-alpha-2 codes to English country names and vice versa.

Uses data from http://data.okfn.org/data/country-list

# example 

``` js
var countries = require('country-list')();

console.log(countries.getName('IS')); // Iceland
console.log(countries.getCode('Iceland')); // IS
```

# methods

Usage:

```
var countries = require('country-list')();
```
All input is case-insensitive.

## getName(code)

Expects a two-digit country code.
Returns the name for that country.
If not found, it returns `undefined`.

## getCode(name)

Expects the English country name.
Returns the code for that country.
If not found, it returns `undefined`.

# install

``` cli
npm install country-list
```

# license

BSD
