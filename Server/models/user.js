const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,
        uniwue:true,
    },
    password:{
        type:String,
        require:true,
    },
    location:{
        type:String,
    },
    carbongoal:{
        type:Number,
        default:100,
    },
    totalCarbon:{ 
        type: Number,
        default: 0 
    },  
    badges:{
        type:Array,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})
module.exports= mongoose.model("User",userSchema);