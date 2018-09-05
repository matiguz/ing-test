var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    quoter  = require('./quoter');

const eventController = require('./controllers/event')

var app = module.exports = express.Router();

// Validate access_token
var jwtCheck = jwt({
  secret: config.secret,
  audience: config.audience,
  issuer: config.issuer
});

// Check for scope
function requireScope(scope) {
  return function (req, res, next) {
    //res.send(req)
    var has_scopes = req.user.scope === scope;
    if (!has_scopes) { 
        res.sendStatus(401); 
        return;
    } else {
      console.log("TIENE SENTIDO QUE NO ENTRE")
    }
    next();
  };
}

app.use('/api/protected', jwtCheck, requireScope('full_access'));

/*app.use('/api', jwtCheck, requireScope('full_access'));*/

app.use('/pito', jwtCheck, function ( err , req , res , next )     { 
  if ( err . name === ' UnuthorizedError ' ) {    
    res . estado ( 401 ) . send ( ' invalid token ... ' ) ;
  }
} ) ;
/*
app.get('/api/events', jwtCheck, function(err, req, res) {
  eventController.getAll;
  // res.status(200).send(quoter.getRandomOne());
  if ( err . name === ' UnuthorizedError ' ) {    
    res . estado ( 401 ) . send ( ' invalid token ... ' ) ;
  }
});*/
