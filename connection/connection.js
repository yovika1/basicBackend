const mongoose = require ('mongoose')

const dbConnection = async () => {
    console.log("connection start");
    try {
        const connect = await mongoose.connect ("mongodb://127.0.0.1:27017/users");
        console.log("connection successfull")
        
    } catch (error) {
        console.log(error);
        process.exit();
    }
 }
 module.exports = dbConnection;
 