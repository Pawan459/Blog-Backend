const dev = process.env.NODE_ENV !== "production";

if (dev) {
  require("dotenv").config();
}


const express = require('express');
const fileUpload = require('express-fileupload');
const apiHandler = require('./api');
require('./connection/mongoConnect');

const app = express();

const port = process.env.PORT || 3000;


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(fileUpload());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api',apiHandler);

app.get('*', (req, res) => res.send('You are not authorized Please Try Again'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));