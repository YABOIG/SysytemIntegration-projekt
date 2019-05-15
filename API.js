import Express from "express";
// import { getUsers, postUsers } from './users';
import bodyParser from 'body-parser';
import request from 'request';

const api = new Express();

api.use(bodyParser.json());


api.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Content-Type', 'Application/json');
   res.header("Access-Control-Allow-Methods" ,"GET,POST,PUT,DELETE,OPTIONS");
   res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");

   next();
});


function getNearbyStops(rq, rs) {
   request(`http://api.sl.se/api2/nearbystops.json?key=e80ab02e16f54c5bb29b681594962ba0&originCoordLat=${rq.body.lat}&originCoordLong=${rq.body.lng}`, { json: true }, (err, res, body) => {
       if (err) { return console.log(err); }
       return rs.json(body.LocationList.StopLocation)
   });
};

api.post('/api/nearbystops', getNearbyStops);

api.listen(3000);
