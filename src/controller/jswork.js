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

const getdynamic_table = async (req, res) =>{
    {
       
        res.render('dynamic_table');
    }
};


const getkukucube = async (req, res) =>{
    {
       
        res.render('kukucube');
    }
};

const getsortingalgo = async (req, res) =>{
    {
       
        res.render('sortingalgo');
    }
};

const gettictactoe = async (req, res) =>{
    {
       
        res.render('tictactoe');
    }
};


const getjsevent = async (req, res) =>{
    {
       
        res.render('jsevent');
    }
};

const getcitystate = async (req, res) =>{
    {
       
        res.render('citystate');
    }
};

const getsortidname = async (req, res) =>{
    const p = req.query.page || 1;
    const limit=100;
    const last=Math.ceil(200/limit);
    const offset =(p-1)*limit;
  
  const sortorder = req.query.sort || 'asc';
  const sortcolumn = req.query.select || 'firstname';
  
    console.log(p);
        con.query(`SELECT * FROM student_master ORDER BY ${sortcolumn} ${sortorder} limit ${limit} offset ${offset}`, function (err, result, fields) {
          if (err) throw err;
          res.render('sortingidname',{result,p,last,sortorder,sortcolumn});
        });
    };


    const getattendance = async (req, res) =>{
        const p = req.query.page || 1;
        const last=Math.ceil(200/50);     
        const m=req.query.month || 'december2023';
        const y =m.slice(0,-4);
        const offset =(p-1)*50;
      
      
        console.log(m);
        console.log(p);
          
         
              const sql=`select s.studentid,s.firstname,monthname(a.date) as month,count(a.ispresent) as presentDay from student_master
               as s inner join attendance_master as a on s.studentid=a.studentid where a.ispresent='P' group by studentid,month having month="${y}" 
               order by studentid limit 50 offset ${offset}`;
              con.query(sql,(err,result)=>{
              if (err) console.log(err);
              else
              res.render('attendance',{result,p,m,last});
        });
      };


      const getresult = async (req, res) =>{
        const p = req.query.page || 1;
        const limit = 150;
      
        const offset = (p - 1) * limit;
      
        const sql = `select e.studentid,s.firstname,t.examname,sum(e.ob_theory)as theory,sum(e.ob_practical)as practical,
              sum(e.ob_practical + e.ob_theory) as total
              from exam_master as e inner join student_master as s on e.studentid=s.studentid inner join exam_type as t where
               e.examtypeid=t.examtypeid  group by t.examtypeid,s.studentid order by e.studentid limit ${limit} offset ${offset}`;
        con.query(sql, (err, result) => {
          if (err)
            console.log(err);
          else
            // console.log(result)
            res.render('result', { result, p });
        });
      };

      
      const getrecord = async (req, res) =>{
    const id = req.query.id;
    console.log(id);
  
    const sql = `select s.studentid, s.firstname,sub.subname,e.examtypeid,e.ob_theory as theory,e.ob_practical as practical
     from student_master as s inner join exam_master as e on s.studentid=e.studentid inner join subject_master as sub on sub.subjectid=e.subjectid where 
     e.studentid=${id}`;
  
    const sql1 = `select count(*) as present from attendance_master where studentid=${id} and  ispresent='P'`;
    con.query(sql, (err, result) => {
      if (err)
        console.log(err);
      con.query(sql1, (err, result2) => {
        if (err)
          console.log(err);
        else
          console.log(result2)
        res.render('record', { result, result2 });
      });
  
    });
    }

    const getdynamicsearch = async (req, res) =>{
        try {
          const result = [];
          if (req.query.textquery) {
            const p = req.query.page || 1;
            let sql = req.query.textquery;
            console.log(sql);
            con.query(sql, (err, result) => {
              if (err) console.log(err);
              else {
                const limit = 30;
                const last = Math.ceil(result.length / limit);
                const offset = (Number(p) - 1) * limit;
                const sql1 = sql + ` limit ${limit} offset ${offset}`;
                console.log(sql1);
                
                const key = Object.keys(result[0]);
                con.query(sql1, (err, result) => {
                    if (err) console.log(err);
                    else {
                      res.render("dynamicsearch", { result,key, sql, p,last });
                }
                });
              }
            });
          } else {
            res.render("dynamicsearch", { result });
          }
        } catch (err) {
          console.log(err);
        }
      };


      const getcolumnsearch = async (req, res) =>{
        const p = req.query.page || 1;
        const limit=20;
        const last=Math.ceil(200/limit);
        const offset =(p-1)*limit;
      
      const sortorder = req.query.sort === 'desc'? 'desc' :'asc';
      const sortcolumn = req.query.select || 'firstname';
            con.query(`SELECT * FROM student_master ORDER BY ${sortcolumn} ${sortorder} limit ${limit} offset ${offset}`, function (err, result, fields) {
              if (err) throw err;
              res.render('columnsearch',{result,p,last,sortorder,sortcolumn});
            });
        };


        const multisearch = async (req, res) =>{
            const p = req.query.page || 1;
            const limit = 100;
            const last = Math.ceil(200 / 100);
            const offset = (p - 1) * limit;
            const studentid = req.query.studentid;
            const firstname = req.query.firstname;
            const lastname = req.query.lastname;
            const city = req.query.city;
            const gender = req.query.gender;
            const operator = req.query.operator;
            const startindex = (p-1)*10;
            const lastindex =p*10;
        
        try{
            if (studentid) {
                var sql = `select * from student_master where studentid=${studentid}`;
                console.log(sql);
            }
            else {
                let array = [];
                if (firstname) array.push(`firstname = '${firstname}'`)
                if (lastname) array.push(`lastname = '${lastname}'`)
                if (gender) array.push(`gender = '${gender}'`)
                if (city) array.push(`city = '${city}'`)
        
        
                let where = '';
                if (array.length > 0) {
                    where = 'where ' + array.join(` ${operator} `);
                }
                sql = `select * from student_master ${where}`;
            
        
            }
            con.query(sql, (err, result) => {
                if (err) console.log(err);
                else {
                    const limit = 100;
               
                  res.render('multisearch', { result,studentid,firstname,lastname,city,gender, p, last,limit});
          
                }
              })
        }
        catch (err) {
            console.error(err);
          }
        };


        const delimetersearch = async (req, res) =>{
            const p = req.query.page || 1;
            const limit = 100;
            const last = Math.ceil(200 / 100);
            const offset = (p - 1) * limit;
        
            var sql = `select * from student_master`;
            const input = req.query.input;
            firstname = "";
            lastname = "";
            city = "";
            gender = "";
            let array = [];
            let preschar='';
            if (req.query.input) {
               
                
                for (i = 0; i < input.length; i++) {
                    if (input[i] == '^' || input[i] == '$' || input[i] == '{'|| input[i] == '_') {
                       if(preschar!="")
                       {
                        array.push(preschar);
                        preschar="";
                       }
                    preschar += input[i];
                    }
                    else{
                        preschar += input[i];
                        if(i===input.length-1|| input[i+1]=='^'||input[i+1] == '$' || input[i+1] == '{'|| input[i] == '_')
                        {
                        array.push(preschar);
                        preschar="";
                        }
                        }
                    }
                }
                
        
             console.log(array);
        
            var fname =[];
            var lname =[];
            var gender1 =[];
            var citycode =[];
        
            array.forEach((e) =>{
                if(!sql.includes('where')) sql += ` where `;
                if(e.charAt(0) == '_') fname.push(`firstname like '%${e.slice(1)}%'`);
                if(e.charAt(0) == '^') lname.push(`lastname like '%${e.slice(1)}%'`);
                if(e.charAt(0) == '$') gender1.push(`gender like '%${e.slice(1)}%'`);
                if(e.charAt(0) == '{') citycode.push(`city like '%${e.slice(1)}%'`);
        
            });
        
            if(fname.length>0) sql+= fname.join(" OR ")+ " AND ";
            if(lname.length>0) sql+= lname.join(" OR ")+ " AND ";
            if(gender1.length>0) sql+= gender1.join(" OR ")+ " AND ";
            if(citycode.length>0) sql+= citycode.join(" OR ")+ " AND ";
        
            if(sql.includes('where')) sql= sql.slice(0,-4); 
        
            console.log(sql);
            con.query(sql, (err, result) => {
                if (err) console.log(err);
                else {
        
                    res.render('delimetersearch', { result ,input});
        
                }
            })
        };



        const getapifetch = async (req, res) =>{
            try {
            //  res.sendFile(path.join(__dirname,"views","index.html"));
            res.render('fetchapiindex')
            } catch (error) {
             console.log(error);
            }
           };
         
           const apifetch = async (req, res) =>{
        //    app.get("/:id",async(req,res)=>{
             try {
            //   res.sendFile(path.join(__dirname,"views","users.html"));
            res.render('fetchapiuser')
             } catch (error) {
              console.log(error);
             }
            };
         
module.exports ={gettictactoe,getsortingalgo,getkukucube,getdynamic_table,getjsevent,getcitystate,getsortidname,getattendance,getresult,getrecord,getdynamicsearch
,getcolumnsearch,multisearch,delimetersearch,getapifetch,apifetch};