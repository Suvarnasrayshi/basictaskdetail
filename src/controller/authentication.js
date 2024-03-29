var express = require("express");
var md5 = require("md5");
const bodyParser = require("body-parser");
var app = express();
const con = require("../config/connection");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { log } = require("console");

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


function randomvalue(length) {
    const value = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let resultv = "";
    for (i = 0; i < length; i++) {
        const randomin = Math.floor(Math.random() * value.length);
        resultv += value[randomin];
    }
    return resultv;
}


const getinsert =async (req, res) => {
    {
        if(req.cookies.token){
            res.render('welcome');
        }
        res.render('list');
    }
    
};

const postinsert = async (req, res) => {
    try {
        
        var { fname, lname, email, phone } = req.body;
        var sql1 = `SELECT * FROM registration where email=?`;
        data = await con.promise().query(sql1, [email]);
        result = data[0];
      //  console.log(result);
        if (data[0].length === 0) {

            var sql = `INSERT INTO registration (firstname, lastname,email, contact,activation,salt) VALUES (?,?,?,?,?,?);`;
            var basic = await con.promise().query(sql, [fname, lname, email, phone, randomvalue(12), randomvalue(4)]);
            var e_id = basic[0].insertId;
            //console.log(e_id);
            //res.send("insert");
            var sql1 = `SELECT * FROM registration where id=${e_id}`;
            data = await con.promise().query(sql1);
            result = data[0][0];
            // console.log(result);
            res.render("detail", { result });
        }
        else {
            return res.json({ msg: "EMAIL ALREADY EXIST!" });
        }
    } catch (err) {
        res.send(err);
    }
};

const getpassword = async (req, res) => {
    try {
        var id = req.query.id;
        data = await con.promise().query(`SELECT * FROM registration where id = ${id} `);
        result = data[0][0];

        //console.log(result);

        var difference = new Date().valueOf() - result.created_at.valueOf();
        var datete = result.created_at.valueOf();
        // console.log(datete)
        var min = Math.floor(difference / 1000*60);
        // console.log(min);
        // var id = req.query.id;
        var activation = req.query.activation;
        res.render("password", { result, min, activation });
    } catch (err) {
        res.send(err);
    }
};

const postpassword =async (req, res) => {
    try {
        var { password, id, activation, salt, repass } = req.body;
        password = password + salt;
        let md5pass = md5(password);
        sql6 = `update registration set password=?,created_at=nom() where id=? and activation=?`;
        await con.promise().query(sql6, [md5pass, id, activation]);
        res.json({ msg: "password created!" });
    }
    catch (err) {
        res.send(err);
    }
};

const getloginat = async (req, res) =>{
    res.render("login");
};

const postloginat = async (req, res) =>{
    try {

        var { email, password } = req.body;
        sql = `select * from registration where email=?`;
        data = await con.promise().query(sql, [email]);
        result = data[0][0];
        if (data[0].length === 0) {
            res.json({ msg: 'empty' });
        }
        else {
            pass = password + result.salt;
            md5pass = md5(pass);
          if (result.password === md5pass) {
              var token = jwt.sign({email},`md5pass`,{expiresIn: '1h'});
              res.cookie('token',token,{expires: new Date(Date.now()+ 90000),httpOnly:true});
             res.json({msg2: "LOGIN SUCCESSFULLY", token:token});
        }
        else {
            res.json({ msg: 'error' });
        }  
        }
    }
    catch (err) {
        res.send(err);
    }
};

const generatetoken= async (req, res) =>{
  try{
    const {activation} =req.query;
    const issue = await con.promise().query('select * from registration where activation = ?',[activation]);
    result =issue[0][0];
    if(issue[0].length === 0)return res.send(`<body style="background-color: black;"><div style="text-align: center; background-color: #d7fcd7; height: 70px;width: 80%;margin-left: 100px;">
    <p style=" color: #0a4932;padding-top:20px"><b>token invalid<b></p></div></body>`)
    let updateacticvation = randomvalue(12);
    const updatedata = await con.promise().query('update registration set activation=?,created_at=now() where activation =?',[updateacticvation,activation]);
    res.send(`<body style="background-color: black;"><div style="text-align: center; background-color: #d7fcd7; height: 70px;width: 80%;margin-left: 100px;"><a href="http://localhost:3033/password/?activation=${updateacticvation}&id=${result.id}" style="text-decoration: none;">  
    <center><p style=" color: #0a4932;padding-top:20px"><b>update the password</b></center></p></a></div></body>`)
  } 
  catch(err)
  {
    console.log(err);
  }
}

const getverify= async (req, res) =>{
    res.render('emailverify');
};

const postverify= async (req, res) =>{
    var email = req.body.email;

    var sql=`update registration set salt=?,activation=? where email=?`;
    data = await con.promise().query(sql, [randomvalue(4),randomvalue(12),email]);
    result = data[0][0];
    //console.log(data[0][0]);
    var sql1 = `SELECT * FROM registration where email=?`;
    data = await con.promise().query(sql1, [email]);
    result = data[0][0];
//console.log(sql);
   // console.log(result);
    if (data[0].length === 0)
    {
        res.json({ msg: 'mail not defined in he database' });
    }
    else{

        res.render('updatepass',{result});
    }

};



module.exports ={getinsert,postinsert,getpassword,getverify,postverify,postloginat,getloginat,postpassword,generatetoken};