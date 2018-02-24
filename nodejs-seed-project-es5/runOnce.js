
const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');


mongoClient.connect('mongodb://localhost:27017',function(err,client){

   assert.equal(null,err);
   const db=client.db("myproject");
   console.log("Connected!!");
   db.collection("users").insert({"name":"Morgan","password":"Hello"}, function(err,result){
  assert.equal(null,err);
    console.log(result);
   });
   db.collection("users").find({"name":"Morgan"}).toArray(function(err,result){
     assert.equal(null,err);
     console.log(result);
   });
});
