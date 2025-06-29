const mongoose= require('mongoose');

const dbConnect= async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/greenStep')
        console.log("Database Connected successfully");
        
    }
    catch(err){
        console.log("error occured", err);
        
    }
}

module.exports = dbConnect;