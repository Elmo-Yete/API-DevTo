//* Hacer el schema mongoose y el modelo

const mongoose = require ("mongoose")

const postSchema = new mongoose.Schema ({
    postTitle:{
        type:String,
        minlength:10,
        maxlength:100,
        required:true
    },
    postContend: {
        type:String,
        minlength:10,
        required:true
    },
    postImage: {
        type:String,
        minlength:10,
        maxlength:100,
        required:true
    },
    postImageTitle:{
        type:String,
        minlength:10,
        maxlength:30,
    },
    postlectureTime: {
        type:Number,
        minlength:1,
        required:true
    },
    postTags:[
        {
            type:String,
            required:true
        },
    ],
    date:{
        type:String,
        required:true
    },
    heartReactions: {
        type:Number,
        required:true
    },
})
//* El modelo se exporta
module.exports = mongoose.model("posts",postSchema,"Posts");