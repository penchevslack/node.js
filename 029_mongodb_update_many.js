var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  var myoptions = { multi: true };
  db.collection("customers").update(myquery, newvalues, myoptions, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record(s) updated");
    db.close();
  });
});