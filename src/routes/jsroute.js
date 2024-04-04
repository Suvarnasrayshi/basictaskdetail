var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const jswork = express.Router();

const { gettictactoe, getsortingalgo, getkukucube, getdynamictable, getjsevent, getsortidname, getattendance, getresult, getrecord, getdynamicsearch, multisearch
    , getcolumnsearch, delimetersearch, getapifetch, apifetch, getcity, getstate, getcitystate } = require('../controller/jswork');


jswork.route("/citystate").get(getcitystate)
jswork.route("/state").get(getstate)
jswork.route("/city/:state").get(getcity)
jswork.route("/dynamictable").get(getdynamictable);
jswork.route("/kukucube").get(getkukucube)
jswork.route("/sortingalgo").get(getsortingalgo)
jswork.route("/tictactoe").get(gettictactoe)
jswork.route("/jsevent").get(getjsevent)
jswork.route("/sortidname").get(getsortidname)
jswork.route("/attendance").get(getattendance)
jswork.route("/result").get(getresult)
jswork.route("/record").get(getrecord)
jswork.route("/dynamicsearch").get(getdynamicsearch)
jswork.route("/columnsearch").get(getcolumnsearch)
jswork.route("/multisearch").get(multisearch)
jswork.route("/delimetersearch").get(delimetersearch)
jswork.route("/apifetch").get(getapifetch)
jswork.route("/apifetch/:id").get(apifetch)
module.exports = jswork;