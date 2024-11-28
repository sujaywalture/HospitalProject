const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { AdminSignUpModel, DoctorSignUpModel, PatientSignUpModel } = require('./Db.js'); // Destructure models from Db.js
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Default GET route (example: fetch all doctors)
app.get('/', function (req, res) {
    DoctorSignUpModel.find()
        .then(doctors => res.send(doctors))
        .catch(err => res.status(500).send({ error: "Error fetching data", details: err.message }));
});

// Admin Signup
app.post('/AdminSignUp', function (req, res) {
    const data = new AdminSignUpModel({
        FullName: req.body.FullName,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number,
        Password: req.body.Password,
        Confirm_Pass: req.body.Confirm_Pass,
    });

    data.save()
        .then(() => res.send({ message: "Admin data saved successfully" }))
        .catch(err => res.status(500).send({ error: "Error saving admin data", details: err.message }));
});

// Doctor Signup
app.post('/DoctorSignUp', function (req, res) {
    const data = new DoctorSignUpModel({
        FullName: req.body.FullName,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number,
        Specialty: req.body.Specialty,
        Password: req.body.Password,
        Confirm_Pass: req.body.Confirm_Pass,
    });

    data.save()
        .then(() => res.send({ message: "Doctor data saved successfully" }))
        .catch(err => res.status(500).send({ error: "Error saving doctor data", details: err.message }));
});

// Patient Signup
app.post('/PatientSignup', function (req, res) {
    const data = new PatientSignUpModel({
        FullName: req.body.FullName,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number,
        Date_of_birth: req.body.Date_of_birth,
        Password: req.body.Password,
        Confirm_Pass: req.body.Confirm_Pass,
    });

    data.save()
        .then(() => res.send({ message: "Patient data saved successfully" }))
        .catch(err => res.status(500).send({ error: "Error saving patient data", details: err.message }));
});

// Admin Login
app.post('/AdminLogin', function (req, res) {
    AdminSignUpModel.find({ Email: req.body.Email })
        .then(admin => {
            if (admin[0].Email === req.body.Email && admin[0].Password === req.body.Password) {
                res.send({ message: "Login successful" });
            } else {
                res.send({ message: "Invalid credentials" });
            }
        })
        .catch(err => res.send({ "message": "Error during login"}));
});

//Patients Login
app.post('/PatientsLogin', (req, res) => {
    PatientSignUpModel.find({ Email: req.body.Email })
        .then(patient => {
            if (patient[0].Email === req.body.Email && patient[0].Password === req.body.Password) {
                res.send({ message: "Login successful!" });
            } else {
                res.send({ message: "Invalid email or password." });
            }
        })
        .catch(err => {
            res.send({ "message": "Error during login."});
        });
});

//Doctors Login
app.post('/DoctorsLogin', (req, res) => {
    DoctorSignUpModel.find({ Email: req.body.Email })
        .then(doctor => {
            if (doctor[0].Email === req.body.Email && doctor[0].Password === req.body.Password) {
                res.send({ message: "Login successful!" });
            } else {
                res.send({ "message": "Invalid email or password." });
            }
        })
        .catch(err => {
            res.send({ message: "Error during login."});
        });
});


// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
