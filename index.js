const request = require('request');

request('http://api.sl.se/api2/nearbystops.json?key=e80ab02e16f54c5bb29b681594962ba0&originCoordLat=59.32932349&originCoordLong=18.068580800000063', { json: true }, (err, res, body) => {
 if (err) { return console.log(err); }
 console.log(body.LocationList.StopLocation);
});
