var csv = require('csv-parser')
var fs = require('fs')

var countries = []

fs.createReadStream('./data.csv')
  .pipe(csv(['name', 'code']))
  .on('data', function (data) {
    if (data.name === 'Name' && data.code === 'Code') return
    countries.push({ code: data.code, name: data.name })
  })
  .on('end', function () {
    fs.writeFile('./data.json', JSON.stringify(countries, null, 2) + '\n', function (err) {
      if (err) throw err
      console.log('Wrote countries to data.json')
    })
  })
