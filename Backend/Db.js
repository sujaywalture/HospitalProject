let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentsignup2")
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("MOngoDB connection reeor:",error));
let column = new mongoose.Schema({
"Pasentname":String,
"Decise":String,
"Mobile":Number,
"HealthCareNumber":String,
"DateofBirth":String,

});

let SignUpModel = mongoose.model('SignUp',column);


let adminCol = new mongoose.Schema({
    "AdminName":String,
    "Mobile":Number,
    "Address":String,
     "Password":String
    
    });
    
 let AdSignUp = mongoose.model('AdminSignUp',adminCol);

module.exports = SignUpModel;
module.exports = AdSignUp;
