
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Task = require("../../src/models/task");
const User = require("../../src/models/user");

const user1Id = new mongoose.Types.ObjectId();
const token = jwt.sign({ _id: user1Id }, process.env.JWT_KEY);
const user1 = {
  _id: user1Id,
  name: "jo",
  email: "joe@example.com",
  password: 123123,
  tokens: [{ token }],
};

const user2Id = new mongoose.Types.ObjectId();
const token2 = jwt.sign({ _id: user1Id }, process.env.JWT_KEY);
const user2 = {
  _id: user2Id,
  name: "angela",
  email: "angela@example.com",
  password: 123123,
  tokens: [{ token2 }],
};


const task1={
  _id: new mongoose.Types.ObjectId,
  description:'first task',
  completed:true,
  owner:user1._id
}
const task2={
  _id: new mongoose.Types.ObjectId,
  description:'second task',
  completed:true,
  owner:user2._id
}
const task3={
  _id: new mongoose.Types.ObjectId,
  description:'third task',
  completed:true,
  owner:user3._id
}


const dbSetup=()=>{
  await User.deleteMany();
  await Task.deleteMany();
  await new User(user1).save();
  await new User(user2).save();

  await new Task(task1).save()
  await new Task(task2).save()
  await new Task(task3).save()

}

module.exports={
  dbSetup,user1,user2,user1Id, user2Id, task1,task2,task3
}