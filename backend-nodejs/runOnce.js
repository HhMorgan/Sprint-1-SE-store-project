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
  {id: 6, name: 'test6',price: 700,createdAt: '',updatedAt:'',seller:'boudi'},
  {id: 7, name: 'test7',price: 800,createdAt: '',updatedAt:'',seller:'boudi'},
  {id: 8, name: 'test8',price: 900,createdAt: '',updatedAt:'',seller:'boudi'},
  {id: 9, name: 'kiwi',price: 20,createdAt: '1-2-2018',updatedAt:'',seller:'Mariam'},
  {id: 10, name: 'Banana',price: 30,createdAt: '2-1-2018',updatedAt:'',seller:'Mariam'},
  {id: 11, name: 'Apple',price: 20,createdAt: '3-1-2018',updatedAt:'',seller:'Mariam'},
  {id: 12, name: 'Peach',price: 20,createdAt: '1-2-2018',updatedAt:'',seller:'Mariam'},
  {id: 13, name: 'Strawberry',price: 25,createdAt: '2-1-2018',updatedAt:'',seller:'Mariam'},
  {id: 14, name: 'Apricot',price: 30,createdAt: '1-1-2018',updatedAt:'',seller:'Mariam'},
  


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
