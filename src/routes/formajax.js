var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const crudajax = express.Router();

const { getdetailajax, detailajax, getdetailajaxid, postdetailajaxupdate, getlistdata } = require('../controller/crudajax');
const validuser = require("../middleware/token");

crudajax.route("/getdetailajax").get(validuser,getdetailajax)
crudajax.route("/detailajax").post(validuser,detailajax)
crudajax.route("/listajax").get(validuser,getlistdata)
crudajax.route("/detailajax/:id").get(validuser,getdetailajaxid)
crudajax.route("/detailajax/:id/update").post(validuser,postdetailajaxupdate)



module.exports = crudajax;