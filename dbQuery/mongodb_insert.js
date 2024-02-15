const url = require('../front/common/common')
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url.getUrl(), function(err, db) {
    if (err) throw err;
    var dbo = db.db("db");
    var myobj = [
        { name: 'John1', id: 'a1' , password: '1234'},
        { name: 'John2', id: 'a2' , password: '1234'},
        { name: 'John3', id: 'a3' , password: '1234'},
        { name: 'John4', id: 'a4' , password: '1234'},
        { name: 'John5', id: 'a5' , password: '1234'}
    ];
    dbo.collection("user").insertOne(myobj, function(err, res) {
        if (err) console.log("err" + err);
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});
