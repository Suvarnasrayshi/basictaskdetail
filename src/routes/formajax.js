var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const login = express.Router();

 const {getdetailajax,detailajax,getdetailajaxid,postdetailajaxupdate,getlistdata} = require('../controller/crudajax');

 login.route("/getdetailajax").get(getdetailajax)
 login.route("/detailajax").post(detailajax)
 login.route("/listajax").get(getlistdata)
 login.route("/detailajax/:id").get(getdetailajaxid)
 login.route("/detailajax/:id/update").post(postdetailajaxupdate)



module.exports = login;