var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const crudauth = express.Router();

 const {postdetailform,getdetailform,detailform,getdetail} = require('../controller/crudauth');

 crudauth.route("/getdetail").get(getdetail)
 crudauth.route("/detailform").post(detailform)
 crudauth.route("/detailform/:id").get(getdetailform)
 crudauth.route("/detailform/:id/update").post(postdetailform)



module.exports = crudauth;