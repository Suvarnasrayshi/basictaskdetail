var express = require("express");
var md5 = require("md5");
const bodyParser = require("body-parser");
// const con = require("./src/config/connection");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require("path");
const log = require('./src/routes/authentication');
const js = require('./src/routes/jsroute');
const crud = require('./src/routes/formcrud');
const crudajax = require('./src/routes/formajax');
var app = express();
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",log);
app.use("/",js);
app.use("/",crud);
app.use("/",crudajax);
app.listen(3036);