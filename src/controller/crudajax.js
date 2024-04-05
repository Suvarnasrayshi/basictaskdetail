var express = require("express");
var md5 = require("md5");
const bodyParser = require("body-parser");
var app = express();
const con = require("../config/connection");
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));




const getdetailajax = async (req, res) => {
    res.render('listajax');
};


const getlistdata = async (req, res) => {

    {
        var sql = `select * from basic_details`;
        data6 = await con.promise().query(sql);
        result = data6[0];
      
        res.render("detailajax", { result })
    }
};

const detailajax = async (req, res) => {
    var { fname, lname, designation, address, address2, email, phone, city, state, gender, zipcode, relationship, dob } = req.body;
    var { education, board, passingyear, percentage } = req.body;
    var { CompanyName, designation1, From1, To1 } = req.body;
    var { nameref, Contactnumber, Relation } = req.body;
    var { hindi, hindi_r, hindi_w, hindi_s, english, english_r, english_w, english_s, gujarati, gujarati_r, gujarati_w, gujarati_s } = req.body;
    var { php, tphp, mysql, tmysql, oracle, toracle, laravel, tlaravel } = req.body;
    var { location, notice, expactedCTC, department, currentCTC } = req.body;

    var sql = `select o.id,o.sid,o.optionname from select_master as s inner join option_master as o on s.id=o.sid`;
    let result = await con.promise().query(sql)
    result[0].forEach(data => {
        if (data.optionname == 'hindi' && hindi == "hindi") hindi = data.id;
        if (data.optionname == 'english' && english == "english") english = data.id;
        if (data.optionname == 'gujarati' && gujarati == "gujarati") gujarati = data.id;
        if (data.optionname == 'php ' && php == "on") php = data.id;
        if (data.optionname == 'oracle ' && oracle == "on") oracle = data.id;
        if (data.optionname == 'mysql ' && mysql == "on") mysql = data.id;
        if (data.optionname == 'laravel ' && laravel == "on") laravel = data.id;

        if (data.optionname == 'begineer ' && tphp == "begineer") tphp = data.id;
        if (data.optionname == 'expert ' && tphp == "expert") tphp = data.id;
        if (data.optionname == 'mediator ' && tphp == "mediator") tphp = data.id;

        if (data.optionname == 'begineer ' && toracle == "begineer") toracle = data.id;
        if (data.optionname == 'expert ' && toracle == "expert") toracle = data.id;
        if (data.optionname == 'mediator ' && toracle == "mediator") toracle = data.id;

        if (data.optionname == 'begineer ' && tmysql == "begineer") tmysql = data.id;
        if (data.optionname == 'expert ' && tmysql == "expert") tmysql = data.id;
        if (data.optionname == 'mediator ' && tmysql == "mediator") tmysql = data.id;

        if (data.optionname == 'begineer ' && tlaravel == "begineer") tlaravel = data.id;
        if (data.optionname == 'expert ' && tlaravel == "expert") tlaravel = data.id;
        if (data.optionname == 'mediator ' && tlaravel == "mediator") tlaravel = data.id;
    })

    var e_id = 0;
    var sql1 = 'INSERT INTO basic_details (`firstname`, `lastname`, `designation`, `address_1`, `address2`, `email`, `phone_number`, `city`, `state`, `gender`, `zipcode`, `relationship`, `dateofbirth`) VALUES (?,?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var basic = await con.promise().query(sql1, [fname, lname, designation, address, address2, email, phone, city, state, gender, zipcode, relationship, dob])
    var e_id = basic[0].insertId;

    var sql3 = 'INSERT INTO `educationdetails` (`employeeid`, `typeofed`,`coursename`, `passingyear`,`percentage`) VALUES (?, ?,?,?,?);';
    for (let i = 0; i < board.length; i++) {
        await con.promise().query(sql3, [e_id, education[i], board[i], passingyear[i], percentage[i]])
    }

    var sql3 = 'INSERT INTO `workexp` (`employeeid`, `Company_name`, `Designation`, `from_d`, `to_d`) VALUES (?, ?, ?, ?, ?);';
    if (CompanyName) {
        for (let i = 0; i < CompanyName.length; i++) {
            await con.promise().query(sql3, [e_id, CompanyName[i], designation1[i], From1[i], To1[i]])
        }
    }

    var sql3 = 'INSERT INTO `referance` (`employeeid`, `refrencename`, `contact`, `relation`) VALUES ( ?, ?, ?, ?);';
    if (nameref) {
        for (let i = 0; i < nameref.length; i++) {
            await con.promise().query(sql3, [e_id, nameref[i], Contactnumber[i], Relation[i]])
        }
    }

    var sql3 = 'INSERT INTO `language` (`optionid`, `employeeid`, `reade`, `writee`, `speak`) VALUES (?, ?, ?,?,?)';
    if (hindi) {
        if (hindi_r == "on") { hindi_r = 1 } else { hindi_r = 0 }
        if (hindi_w == "on") { hindi_w = 1 } else { hindi_w = 0 }
        if (hindi_s == "on") { hindi_s = 1 } else { hindi_s = 0 }
        await con.promise().query(sql3, [5, e_id, hindi_r, hindi_w, hindi_s])
    }

    if (english) {
        if (english_r == "on") { english_r = 1 } else { english_r = 0 }
        if (english_w == "on") { english_w = 1 } else { english_w = 0 }
        if (english_s == "on") { english_s = 1 } else { english_s = 0 }
        await con.promise().query(sql3, [6, e_id, english_r, english_w, english_s])
    }
    if (gujarati) {
        if (gujarati_r == "on") { gujarati_r = 1 } else { gujarati_r = 0 }
        if (gujarati_w == "on") { gujarati_w = 1 } else { gujarati_w = 0 }
        if (gujarati_s == "on") { gujarati_s = 1 } else { gujarati_s = 0 }
        await con.promise().query(sql3, [7, e_id, gujarati_r, gujarati_w, gujarati_s])
    }

    var sql4 = 'INSERT INTO `technology` (`employeeid`, `technology`, `tech_level`) VALUES (?, ?,?);';
    if (php) {
        
        if (tphp === 'begineer') {
            await con.promise().query(sql4, [e_id, 8, 12]);
        }
        else if (tphp === 'mediator') {
            await con.promise().query(sql4, [e_id, 8, 13]);
        }
        else if (tphp === 'expert') {
            await con.promise().query(sql4, [e_id, 8, 14]);
        }
    }
    if (mysql) {
        if (tmysql === 'begineer') {
            { await con.promise().query(sql4, [e_id, 10, 12]); }
        }
        else if (tmysql === 'mediator') {

            { await con.promise().query(sql4, [e_id, 10, 13]); }
        }
        else if (tmysql === 'expert') {

            { await con.promise().query(sql4, [e_id, 10, 14]); }
        }
    }

    if (oracle) {
        if (toracle === 'begineer') {
            await con.promise().query(sql4, [e_id, 11, 12]);
        }
        else if (toracle === 'mediator') {
            await con.promise().query(sql4, [e_id, 11, 13]);
        }
        else if (toracle === 'expert') {
            await con.promise().query(sql4, [e_id, 11, 14]);
        }
    }
    if (laravel) {
        if (tlaravel === 'begineer') {
            await con.promise().query(sql4, [e_id, 9, 12]);
        }
        else if (tlaravel === 'mediator') {
            await con.promise().query(sql4, [e_id, 9, 13]);
        }
        else if (tlaravel === 'expert') {
            await con.promise().query(sql4, [e_id, 9, 14]);
        }
    }
    var sql3 = 'INSERT INTO `preferances` (`employeeid`, `preferd_location`, `notice_period`, `ExpactedCTC`, `Department`, `currentctc`) VALUES (?,?,?,?,?,?);';
    await con.promise().query(sql3, [e_id, location, notice, expactedCTC, department, currentCTC])

    res.json({ msg: "form submitted!!" })

};

const getdetailajaxid = async (req, res) => {
    sql = `SELECT * FROM basic_details where id=${req.params.id}`;
    sql1 = `SELECT * FROM educationdetails where employeeid=${req.params.id}`;
    sql2 = `SELECT * FROM workexp where employeeid=${req.params.id}`;
    sql3 = `SELECT * FROM referance where employeeid=${req.params.id}`;
    sql4 = `SELECT * FROM preferances where employeeid=${req.params.id}`;

    hindi = [], english = [], gujarati = [];
    sql5 = `SELECT * FROM language where employeeid=${req.params.id}`
    data5 = await con.promise().query(sql5);
    result5 = data5[0];
    result5.forEach(e => {
        if (e.optionid === 5) hindi.push(e);
        if (e.optionid === 6) english.push(e);
        if (e.optionid === 7) gujarati.push(e);
    })



    php = [], laravel = [], oracle = [], mysql = [];
    sql6 = `SELECT * FROM technology where employeeid=${req.params.id}`
    data6 = await con.promise().query(sql6);
    result6 = data6[0];
    result6.forEach(e => {
        if (e.technology === 8) php.push(e);
        if (e.technology === 9) laravel.push(e);
        if (e.technology === 10) oracle.push(e);
        if (e.technology === 11) mysql.push(e);
    })

    data = await con.promise().query(sql);
    data1 = await con.promise().query(sql1);
    data2 = await con.promise().query(sql2);
    data3 = await con.promise().query(sql3);
    data4 = await con.promise().query(sql4);

    result = data[0][0];
    result1 = data1[0];
    result2 = data2[0];
    console.log(result1);
    result3 = data3[0];
    result4 = data4[0][0];
    res.render("updateajax", { result, result1, result2, result3, result4, result5 })
};
const postdetailajaxupdate = async (req, res) => {
    var { fname, lname, designation, address, address2, email, phone, city, state, gender, zipcode, relationship, dob } = req.body;
    sql = `update basic_details set firstname = ?, lastname=?, designation=?,address_1=?,address2=?,email=?,phone_number=?,
        city=?,state=?,gender=?,zipcode=?,relationship=?,dateofbirth=? where id =${req.params.id}`;
    await con.promise().query(sql, [fname, lname, designation, address, address2, email, phone, city, state, gender, zipcode, relationship, dob])
    res.send("updated data");


    var { education, board, passingyear, percentage } = req.body;
    sql1 = `update educationdetails set typeofed=?,coursename=?,percentage=?,passingyear=? where employeeid =${req.params.id}`
    for (let i = 0; i < board.length; i++) {
        await con.promise().query(sql1, [education[i], board[i], percentage[i], passingyear[i]])
    }

    var { CompanyName, designation1, From1, To1 } = req.body;
    sql2 = `update workexp set Company_name=?,Designation=?,from_d=?,to_d=?  where employeeid =${req.params.id}`
    for (let i = 0; i < CompanyName.length; i++) {
        await con.promise().query(sql2, [CompanyName[i], designation1[i], From1[i], To1[i]])
    }

    var { nameref, Contactnumber, Relation } = req.body;
    var sql3 = `update referance set refrencename=?,contact=?,relation=? where employeeid =${req.params.id}`
    for (let i = 0; i < nameref.length; i++) {
        var r = await con.promise().query(sql3, [nameref[i], Contactnumber[i], Relation[i]])
    }
   


    var sqll = `select o.id,o.sid,o.optionname from select_master as s inner join option_master as o on s.id=o.sid`;
    let result = await con.promise().query(sqll)
    result[0].forEach(data => {

        if (data.optionname == 'hindi' && hindi == "hindi") hindi = data.id;
 
        if (data.optionname == 'english' && english == "english") english = data.id;
        if (data.optionname == 'gujarati' && gujarati == "gujarati") gujarati = data.id;

    })
  


    var { hindi, hindi_r, hindi_w, hindi_s, english, english_r, english_w, english_s, gujarati, gujarati_r, gujarati_w, gujarati_s, lang } = req.body;
    var sql4 = `update language set optionid=?,reade=?,writee=?,speak=? where employeeid =${req.params.id} and id=?`
    if (hindi) {
        if (hindi_r == "on") { hindi_r = 1 } else { hindi_r = 0 }
        if (hindi_w == "on") { hindi_w = 1 } else { hindi_w = 0 }
        if (hindi_s == "on") { hindi_s = 1 } else { hindi_s = 0 }
        await con.promise().query(sql4, [5, hindi_r, hindi_w, hindi_s, lang[0]])
    }

    if (english) {
        if (english_r == "on") { english_r = 1 } else { english_r = 0 }
        if (english_w == "on") { english_w = 1 } else { english_w = 0 }
        if (english_s == "on") { english_s = 1 } else { english_s = 0 }
        await con.promise().query(sql4, [6, english_r, english_w, english_s, lang[1]])
    }

    if (gujarati) {
        if (gujarati_r == "on") { gujarati_r = 1 } else { gujarati_r = 0 }
        if (gujarati_w == "on") { gujarati_w = 1 } else { gujarati_w = 0 }
        if (gujarati_s == "on") { gujarati_s = 1 } else { gujarati_s = 0 }
        await con.promise().query(sql4, [7, gujarati_r, gujarati_w, gujarati_s, lang[2]])
    }


    var { php, tphp, mysql, tmysql, oracle, toracle, laravel, tlaravel, tech } = req.body;
    var sql5 = `update technology set technology=?,tech_level=? where employeeid =${req.params.id} and id=?`
    if (php) {
        if (tphp === 'begineer') {
            await con.promise().query(sql5, [8, 12, tech[0]]);
        }
        else if (tphp === 'mediator') {
            await con.promise().query(sql5, [8, 13, tech[0]]);
        }
        else if (tphp === 'expert') {
            await con.promise().query(sql5, [8, 14, tech[0]]);
        }
    }
    if (mysql) {
        if (tmysql === 'begineer') {
            { await con.promise().query(sql5, [10, 12, tech[1]]); }
        }
        else if (tmysql === 'mediator') {

            { await con.promise().query(sql5, [10, 13, tech[1]]); }
        }
        else if (tmysql === 'expert') {

            { await con.promise().query(sql5, [10, 14, tech[1]]); }
        }
    }

    if (oracle) {
        if (toracle === 'begineer') {
            await con.promise().query(sql5, [11, 12, tech[2]]);
        }
        else if (toracle === 'mediator') {
            await con.promise().query(sql5, [11, 13, tech[2]]);
        }
        else if (toracle === 'expert') {
            await con.promise().query(sql5, [11, 14, tech[2]]);
        }
    }
    if (laravel) {
        if (tlaravel === 'begineer') {
            await con.promise().query(sql5, [9, 12, tech[3]]);
        }
        else if (tlaravel === 'mediator') {
            await con.promise().query(sql5, [9, 13, tech[3]]);
        }
        else if (tlaravel === 'expert') {
            await con.promise().query(sql5, [9, 14, tech[3]]);
        }
    }
    var { location, notice, expactedCTC, department, currentCTC } = req.body;
    sql6 = `update preferances set preferd_location=?,notice_period=?,ExpactedCTC=?,Department=?,currentctc=? where employeeid =${req.params.id}`
    await con.promise().query(sql6, [location, notice, expactedCTC, department, currentCTC])

};

module.exports = { getdetailajax, detailajax, getdetailajaxid, postdetailajaxupdate, getlistdata };
