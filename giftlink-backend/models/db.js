// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;


// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    if(!url){
        throw new Error('MONGO_URL environment variable is not defined. Please check your .env file and ensure it contains a valid MongoDB connection string.')
    }
    // Task 1: Connect to MongoDB
   try{
    const client = new MongoClient(url)
    await client.connect();
    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);
    console.log(`Connected to database: ${dbInstance.databaseName}`)
    // Task 3: Return database instance
    return dbInstance
   }catch(err){
    throw err;
   }
}

module.exports = connectToDatabase;
