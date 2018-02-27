var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Store-Database";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Store-Database");

  var ProductsObj = [
  {     id: 1,
      Name: 'Mayar',
      Price: '6000',
      CreatedAt: '12/12/2003',
      UpdatedAt: '9/9/2009',
      SellerName: 'Youhanna'}
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
