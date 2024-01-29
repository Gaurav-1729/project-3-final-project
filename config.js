const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://gauravdabureee21:Fsd76SAqY2cqPx9d@login-signup.00vfkvw.mongodb.net/");
// mongodb://localhost:27017
// Check database connected or not
"mongodb+srv://gauravdabureee21:Fsd76SAqY2cqPx9d@login-signup.00vfkvw.mongodb.net/"
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String,
        require: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;