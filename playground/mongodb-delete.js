//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

//.deleteMany
// db.collection('Users').deleteMany({name: 'Jeff'})
// .then((results) => {
//     console.log(results);
// });

//.deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'})
//   .then((results) => {
//     console.log(results);
//   });

//findOneAndDelte
db.collection('Users').findOneAndDelete({_id: new ObjectID("5a4f3532ef023233243e0b95")})
 .then((results) =>{
  console.log(results);
});
  // db.close();
});
