var express = require("express");
const bodyParser = require("body-parser");
const con = require("../config/connection");
const crudauth = express.Router();

const { postdetailform, getdetailform, detailform, getdetail } = require('../controller/crudauth');
const validuser = require("../middleware/token");
crudauth.route("/getdetail").get(validuser,getdetail)
crudauth.route("/detailform").post(validuser,detailform)
crudauth.route("/detailform/:id").get(validuser,getdetailform)
crudauth.route("/detailform/:id/update").post(validuser,postdetailform)

module.exports = crudauth;