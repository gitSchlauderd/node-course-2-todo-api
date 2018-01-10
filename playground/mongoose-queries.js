const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id2 = '5a4febb4fb0b0b38700073e6'

if (!ObjectID.isValid(id2)) {
  console.log('ID not valid');
}

User.findById(id2).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));

// var id = '5a5134130043ec2ab0d5627a';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));
