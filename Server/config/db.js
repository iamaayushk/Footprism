const mongoose= require('mongoose');
require('dotenv').config();
const dbConnect= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected successfully");
        
    }
    catch(err){
        console.log("error occured", err);
        
    }
}

module.exports = dbConnect;