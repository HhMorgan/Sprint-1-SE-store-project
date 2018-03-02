var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Store-Database";




MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Store-Database");  

  var ProductsObj = [

  ];

  var usersObj = [
    { username: '1', password: '1',type:'user'},
    { username: '2', password: '2',type:'admin'},
    { username: 'user', password: 'user',type:'user'},
    { username: 'admin', password: 'admin',type:'admin'},
    { username: 'manager', password: 'manager',type:'manager'}
  ];
  var cartsObj = [
    { username: '1', name:'Dragon Quest XI',price:59.99,seller:'admin'},
    { username: '2', name:'Monster Hunter World',price:59.99,seller:'user'},
    { username: 'user', name:'Nier Automata',price:59.99,seller:'manager'},
    { username: 'admin', name:'Final Fantasy XV RE',price:49.99,seller:'2'},
    { username: 'manager', name:'Persona 5',price:59.99,seller:'1'},
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