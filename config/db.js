require('dotenv').config();
const mongoose = require('mongoose');
// function connectDB() {
//     // Database connection 
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });

//     const connection = mongoose.connection;

//     connection.once('open', () => {
//         console.log('Database connected successfully 🥳');
//     }).catch(err => {
//         console.log('Database connection failed');
//     });
// }

class Database {

    constructor() {
        this.connect();
    }
    
    connect() {
        mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
        .then(() => {
            console.log("Database connected successfully! 🥳")
        })
        .catch((err) => {
            console.log("Database connection ERROR ho gya! " + err)
        })
    }
}

module.exports = new Database;