const url = require('../front/common/common')
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(url.getUrl(), function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("user").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});
