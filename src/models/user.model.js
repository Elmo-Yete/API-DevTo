//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")

const userSchema = new mongoose.Schema ({
    name: {
        type:String,
        minlength:3,
        maxlength:15,
        required:true
    },
    email: {
        type:String,
        match:/^.*@.*\..*$/,
        minlength:14,
        required:true
    },
    password:{
        type:String,
        minlength:3,
        maxlength:15,
        required:true
    },
    id: {
        type:String,
    }
})
//* El modelo se exporta
module.exports = mongoose.model("users",userSchema,"Users");