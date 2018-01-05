//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5a4f32ef69dddd044042fd03")
}, {
  $set: {
    name: 'Jeff'
  }, //make sure to include all $inc/$set/etc inside of the initial {}
  $inc: {
    age: -99
  }
}, {
  returnOriginal: false
}).then((results) => {
  console.log(results);
});

//find one and update
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5a4fc0573faa16295ca66370")
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((results) => {
//   console.log(results);
// });

  // db.close();
});
