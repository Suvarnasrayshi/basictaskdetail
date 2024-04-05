var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const jswork = express.Router();

const { gettictactoe, getsortingalgo, getkukucube, getdynamictable, getjsevent, getsortidname, getattendance, getresult, getrecord, getdynamicsearch, multisearch
    , getcolumnsearch, delimetersearch, getapifetch, apifetch, getcity, getstate, getcitystate } = require('../controller/jswork');
const validuser = require("../middleware/token");


jswork.route("/citystate").get(validuser,getcitystate)
jswork.route("/state").get(validuser,getstate)
jswork.route("/city/:state").get(validuser,getcity)
jswork.route("/dynamictable").get(validuser,getdynamictable);
jswork.route("/kukucube").get(validuser,getkukucube)
jswork.route("/sortingalgo").get(validuser,getsortingalgo)
jswork.route("/tictactoe").get(validuser,gettictactoe)
jswork.route("/jsevent").get(validuser,getjsevent)
jswork.route("/sortidname").get(validuser,getsortidname)
jswork.route("/attendance").get(validuser,getattendance)
jswork.route("/result").get(validuser,getresult)
jswork.route("/record").get(validuser,getrecord)
jswork.route("/dynamicsearch").get(validuser,getdynamicsearch)
jswork.route("/columnsearch").get(validuser,getcolumnsearch)
jswork.route("/multisearch").get(validuser,multisearch)
jswork.route("/delimetersearch").get(validuser,delimetersearch)
jswork.route("/apifetch").get(validuser,getapifetch)
jswork.route("/apifetch/:id").get(validuser,apifetch)
module.exports = jswork;