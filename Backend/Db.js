let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HospitalSYstem")
.then(() => console.log("Connected to MongoDB"))
.catch(error => console.error("MOngoDB connection reeor:",error));


let AdminSignUpcolumn = new mongoose.Schema({
"FullName":String,
"Email":String,
"Phone_Number":Number,
"Password":String,
"Confirm_Pass":String,

});

let AdminSignUpModel = mongoose.model('AdminSignUp', AdminSignUpcolumn);


let DoctorSignUpcolumn = new mongoose.Schema({
    "FullName":String,
    "Email":String,
    "Phone_Number":Number,
    "Specialty":String,
    "Password":String,
    "Confirm_Pass":String,
    
    });
    
    let DoctorSignUpModel = mongoose.model('DoctorSignUp',DoctorSignUpcolumn);
    
 
    let PatientSignUpcolumn = new mongoose.Schema({
        "FullName":String,
        "Email":String,
        "Phone_Number":Number,
        "Date_of_birth":String,
        "Password":String,
        "Confirm_Pass":String,
        
        });
        
        let PatientSignUpModel = mongoose.model('PatientSignUp',PatientSignUpcolumn);

// Export all models
module.exports = {
    AdminSignUpModel,
    DoctorSignUpModel,
    PatientSignUpModel,
};

