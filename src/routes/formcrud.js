var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const login = express.Router();

 const {postdetailform,getdetailform,detailform,getdetail} = require('../controller/crudauth');

 login.route("/getdetail").get(getdetail)
 login.route("/detailform").post(detailform)
 login.route("/detailform/:id").get(getdetailform)
 login.route("/detailform/:id/update").post(postdetailform)



module.exports = login;