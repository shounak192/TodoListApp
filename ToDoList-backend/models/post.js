const mongoose= require("mongoose");

const postSchema= new mongoose.Schema({
    _id:{
        type:Number,
        required:"id is required"
    },
    name:{
        type:String,
        required:"name is required"
    },
    complete: {
        type:Boolean,
        required:"complete is required"
    }
});

module.exports = mongoose.model("Post", postSchema);