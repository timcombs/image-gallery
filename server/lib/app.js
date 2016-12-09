const express = require('express');
const app = express();
const errHandler = require('err-handler');
const morgan = require('morgan');

const images = require('.routes/images');

//using morgan in production mode
app.use(morgan('dev'));

//redirect http to https FOR PRODUCTION
if(process.env.NODE_ENV === 'production') {
  //middleware to check each req
  app.use((req, res, next) => {
    if(req.headers['x-forwarded-proto'] === 'https') next(); //removed double quotes isOK?
    else res.redirect(`https://${req.hostname}${req.url}`);
  });
}

//set CORS headers
app.use((req, res, next) => {
  console.log('setting CORS headers');
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api/images', images);

app.use(errHandler);

module.exports = app;