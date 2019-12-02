const fs = require('fs');
const readline = require('readline');
const http = require('http');

// Download: https://data.geo.admin.ch/ch.meteoschweiz.messwerte-aktuell/VQHA80.csv
let rs = fs.createReadStream('VQHA80.csv');
let lineReader = readline.createInterface({input: rs});

let temperature = {};
let skip = 3;

lineReader.on('line', line => {
  if (skip > 0) {
    skip--;
  } else {
    let fields = line.split(/;/);
    temperature[fields[0]] = fields[2];
  }
});

http.createServer(function (req, res) {
  let sleep = Math.floor(Math.random() * 500.0)
  setTimeout(() => {
    let station = req.url.substring(1);
    res.write(JSON.stringify({station: station, temperature: temperature[station]}));
    res.end();
  }, 250 + sleep);
}).listen(3000);
