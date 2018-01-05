//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops))
  // });

// db.collection('Users').insertOne({
//   name: 'Jeff',
//   age: 25,
//   location: 'Denver'
// }, (err, result) => {
//   if(err) {
//     return console.log('Unable to insert user.', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });

//new doc 'users' name, age, location
  db.close();
});
