var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const login = express.Router();

const{getinsert,postinsert,getpassword,getverify,postverify,postloginat,getloginat,postpassword,generatetoken}=require('../controller/authentication');


login.route("/").get(getinsert);
login.route("/insert").post(postinsert);
login.route("/password").get(getpassword).post(postpassword);
login.route("/loginat").get(getloginat).post(postloginat);
login.route("/verify").get(getverify).post(postverify);
login.route("/generatetoken").get(generatetoken);

module.exports = login;