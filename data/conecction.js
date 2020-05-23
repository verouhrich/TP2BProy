const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:Vero1234@cluster0-ayp7a.mongodb.net/test";

const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true});

async function getConnection(){
    return await client.connect().catch(err => console.error(err));
}

module.exports = {getConnection};