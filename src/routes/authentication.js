var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const login = express.Router();

const{getinsert,postinsert,getpassword,getverify,postverify,postloginat,getloginat,postpassword}=require('../controller/authentication');

const{gettictactoe,getsortingalgo,getkukucube,getdynamic_table,getjsevent,getcitystate} =require('../controller/jswork');

login.route("/").get(getinsert);
login.route("/insert").post(postinsert);
login.route("/password").get(getpassword).post(postpassword);
login.route("/loginat").get(getloginat).post(postloginat);
login.route("/verify").get(getverify).post(postverify);
login.route("/dynamic_table").get(getdynamic_table);
login.route("/kukucube").get(getkukucube)
login.route("/sortingalgo").get(getsortingalgo)
login.route("/tictactoe").get(gettictactoe)
login.route("/jsevent").get(getjsevent)

module.exports = login;