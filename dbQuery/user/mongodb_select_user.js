const { MongoClient } = require('mongodb');
const url = require('../../front/common/common');

async function selectUser(email, password) {
    const client = new MongoClient(url.getUrl(), { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('db');
        const collection = database.collection('user');

        const user = await collection.findOne({ email, password });
        return user;
    } catch (error) {
        console.error('사용자 조회 오류:', error);
        return null;
    } finally {
        await client.close();
    }
}

module.exports = selectUser;
