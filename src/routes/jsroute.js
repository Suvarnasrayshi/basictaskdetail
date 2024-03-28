var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const login = express.Router();

const{gettictactoe,getsortingalgo,getkukucube,getdynamic_table,getjsevent,getcitystate,getsortidname,getattendance,getresult,getrecord,getdynamicsearch,getcolumnsearch} =require('../controller/jswork');


login.route("/dynamic_table").get(getdynamic_table);
login.route("/kukucube").get(getkukucube)
login.route("/sortingalgo").get(getsortingalgo)
login.route("/tictactoe").get(gettictactoe)
login.route("/jsevent").get(getjsevent)
login.route("/sortidname").get(getsortidname)
login.route("/attendance").get(getattendance)
login.route("/result").get(getresult)
login.route("/record").get(getrecord)
login.route("/dynamicsearch").get(getdynamicsearch)
login.route("/columnsearch").get(getcolumnsearch)

module.exports = login;