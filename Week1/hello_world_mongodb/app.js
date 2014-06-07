var MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://kide:123456@ds037778.mongolab.com:37778/m101js', function (err, db) {
   
   if (err) throw err;
   
   db.collection('test').findOne({}, function (err, doc) {
       
       if (err) throw err;
       
       console.dir(doc);
       
       db.close();
   
   }); 
   console.log('Called findOne');
});