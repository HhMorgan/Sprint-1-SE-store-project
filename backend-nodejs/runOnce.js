var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Store-Database";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Store-Database");

  var ProductsObj = [
  {id: 1, name: 'test1',price: 200,createdAt: '',updatedAt:'',seller:'nada'},
  {id: 2, name: 'test2',price: 300,createdAt: '',updatedAt:'',seller:'nada'},
  {id: 3, name: 'test3',price: 450,createdAt: '',updatedAt:'',seller:'nada'},
  {id: 4, name: 'test4',price: 100,createdAt: '',updatedAt:'',seller:'nada'},
  {id: 5, name: 'test5',price: 150,createdAt: '',updatedAt:'',seller:'nada'},

  ];

  var usersObj = [
    { username: '1', password: '1'},
    { username: '2', password: '2'},
    { username: 'user', password: 'user'},
    { username: 'admin', password: 'admin'},
    { username: 'manager', password: 'manager'}
  ];

  var collectionsObj = [
    {name: 'Products', data: ProductsObj},
    {name: 'Users', data: usersObj},
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
