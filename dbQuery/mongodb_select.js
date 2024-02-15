const { MongoClient } = require('mongodb');
// 클라우드 아틀라스 MongoDB URI
const url = require('../front/common/common')

const client = new MongoClient(url.getUrl(), { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        // MongoDB에 연결
        await client.connect();
        console.log("Connected to MongoDB");

        // 데이터베이스 및 컬렉션 선택
        const database = client.db("db");
        const collection = database.collection("user");

        // 데이터 삽입
        const result = await collection.deleteOne();

        console.log(`${result.deletedCount} documents delete`);
    } finally {
        // 클라이언트 닫기
        await client.close();
    }
}