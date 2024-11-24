const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const Model = require('./Db.js');
const app = express()
app.use(bodyparser.json())
app.use(cors())

app.get('/',function (req,res){ // here function (req,res) is a callbackfunction

Model.find().then(p=>res.send(p)).catch(err=>console.log(err))
});

// app.post('/',function (req,res){
// const data = new Model({
// "Pasentname":req.body.Pasentname,
// "Decise":req.body.Decise,
// "Mobile":req.body.Mobile,
// "HealthCareNumber":req.body.HealthCareNumber,
// "DateofBirth":req.body.DateofBirth


// })
// data.save().then(d=>res.send({"message":"Data Save Successfully"}))
// .catch(err=>console.log(err))
// })


 
app.post('/',function (req,res){
    const data = new Model({
    "AdminName":req.body.AdminName,
    "Mobile":req.body.Mobile,
    "Address":req.body.Address,
     "Password":req.body.Password
    
    })
    data.save().then(d=>res.send({"message":"Data Save Successfully"}))
    .catch(err=>console.log(err))
    })



    app.post('AdminLogin/',function(res,req){
        Model.find({"AdminName":req.body.AdminName})
        .then(r=>{
            if(r[0].AdminName===req.body.AdminName && r[0].Password === req.body.Password){
                res.send({"message":"Login Successfully"})
            }
            else{
                res.send({"message":"Invalid Credentials"})
            }
        })
        .catch(a=>res.send({"message":"Admin Not Present"}))
    })
      

app.listen(3000);