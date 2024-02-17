const { MongoClient } = require('mongodb');
// 클라우드 아틀라스 MongoDB URI
const url = require('../../front/common/common')

async function insertUser(email, password, name) {
    const client = new MongoClient(url.getUrl(), { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('db');
        const collection = database.collection('user');

        const user = await collection.insertOne({ email, password ,name});
        return user;
    } catch (error) {
        return null;
    } finally {
        await client.close();
    }
}

module.exports = insertUser;