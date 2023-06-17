//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")

const commentSchema = new mongoose.Schema ({
    post_id:{
        type:String,
        minlength:6,
        maxlength:50,
        required:true
    },
    comment_id: {
        type:String,
        minlength:6,
        maxlength:50,
        required:true
    },
})
//* El modelo se exporta
module.exports = mongoose.model("comments",commentSchema,"Comments");