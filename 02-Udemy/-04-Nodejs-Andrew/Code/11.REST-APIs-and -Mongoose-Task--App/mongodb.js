const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "taskManagerDB";
// const client = new MongoClient(url);

const id = new ObjectID();
// console.log(id);
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("err: " + err);
  }

  const taskManagerDB = client.db(dbName);

  // taskManagerDB.collection("users")
  // .insertOne({ name: "ali", age: 27 }, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(data.ops);
  // });
  // .insertMany(
  //   [
  //     { name: "hend", age: 3 },
  //     { name: "joe", age: 30 },
  //   ],
  //   (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(data.ops);
  //   }
  // );

  // taskManagerDB.collection("tasks").insertMany(
  //   [
  //     { desc: "playfootball", done: false },
  //     { desc: "finish section 10 from nodejs course ", done: false },
  //   ],
  //   (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log(data.ops  );
  //   }
  // );

  // ? findOne
  // taskManagerDB
  //   .collection("users")
  // .findOne({ name: "hend" }, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   console.log(data);
  // });
  // .find({ name: "ali" })
  // .toArray((err, users) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(users);
  // });

  //  ? Find task/all tasks

  // taskManagerDB
  //   .collection("tasks")
  // .findOne({ done: false }, (err, task) => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   console.log(task);
  // })
  // .findOne({ _id: ObjectID("62b6daace5ab1a337s8cd75fa") }, (err, task) => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   console.log(task);
  // });
  // .find({ done: false })
  // .toArray((err, tasks) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(tasks);
  // });

  //  ? Update one
  // taskManagerDB
  //   .collection("users")
  // .updateOne(
  //   { _id: new ObjectID("62b6d748579a4b377c76f56f") },
  //   {
  //     $set: {
  //       name: "ali2",
  //     },
  //     $inc: { age: 1 },
  //   }
  // )
  // .then((result) => {
  //   console.log(result);
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // ? update many
  // taskManagerDB
  //   .collection("tasks")
  //   .updateMany(
  //     { done: false },
  //     {
  //       $set: {
  //         done: true,
  //       },
  //     }
  //   )
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // ? delete many

  // taskManagerDB
  //   .collection("users")
  //   .deleteMany({ age: 27 })
  //   .then((result) => {
  //     console.log("all users deleted ");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // ? delete one
  taskManagerDB
    .collection("tasks")
    .deleteOne({ _id: new ObjectID("62b6daace5ab1a3378cd75fb") })
    .then((result) => {
      console.log("user deleted");
    })
    .catch((err) => {
      console.log(err);
    });
});
