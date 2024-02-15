const { MongoClient } = require('mongodb');
// 클라우드 아틀라스 MongoDB URI
const url = require('../front/common/common')

// MongoDB 클라이언트 생성
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
        const result = await collection.insertMany([
            { name: 'John1', id: 'a1', password: '1234' },
            { name: 'John2', id: 'a2', password: '1234' },
            { name: 'John3', id: 'a3', password: '1234' },
            { name: 'John4', id: 'a4', password: '1234' },
            { name: 'John5', id: 'a5', password: '1234' }
        ]);

        console.log(`${result.insertedCount} documents inserted`);
    } finally {
        // 클라이언트 닫기
        await client.close();
    }
}

main().catch(console.error);
