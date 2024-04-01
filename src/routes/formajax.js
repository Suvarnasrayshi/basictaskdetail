var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const crudajax = express.Router();

 const {getdetailajax,detailajax,getdetailajaxid,postdetailajaxupdate,getlistdata} = require('../controller/crudajax');

 crudajax.route("/getdetailajax").get(getdetailajax)
 crudajax.route("/detailajax").post(detailajax)
 crudajax.route("/listajax").get(getlistdata)
 crudajax.route("/detailajax/:id").get(getdetailajaxid)
 crudajax.route("/detailajax/:id/update").post(postdetailajaxupdate)



module.exports = crudajax;