var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Store-Database";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Store-Database");  

  var ProductsObj = [

  ];

  var usersObj = [
    { username: '1', password: '1'},
    { username: '2', password: '2'},
    { username: 'user', password: 'user'},
    { username: 'admin', password: 'admin'},
    { username: 'manager', password: 'manager'}
  ];
  var cartsObj = [
    { username: '1', items: ['a','b','c','d']},
    { username: '2', items: ['e','f','g','h']},
    { username: 'admin', items: ['i','j','k','l']},
    { username: 'manager', items: ['m','n','o','p']},
  ];
  var collectionsObj = [
    {name: 'Products', data: null},
    {name: 'Users', data: usersObj},
    {name: 'Carts', data: cartsObj},
  ];

  for (var i = 0; i < collectionsObj.length; i++){
    if(collectionsObj[i].data == null){
      dbo.createCollection(collectionsObj[i].name , function(err, res){
        if(err) throw err;
        done = true;
      });
    } else {
      dbo.collection(collectionsObj[i].name).insertMany(collectionsObj[i].data,function(err,res) {
        if(err) throw err;
        done = true;
      });
    }
    console.log("Collection: "+collectionsObj[i].name+" created !");
  }
  console.log("Press Control C");
}); 