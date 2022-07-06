//! new  code updated with rooms

const express = require("express");
const socketIO = require("socket.io");
const Filter = require("bad-words");

const http = require("http");

const path = require("path");
const { generateMessage } = require("./utils/generateMessage");
const { generateLocation } = require("./utils/generateLocation");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const {
  getRoomUsers,
  getUser,
  removeUser,
  addUser,
} = require("./utils/users.js");

// ! EMITTING TYPES

// 1) socket.emit()                         --> emit only for specific client connection
// 2) io.emit()                             --> emit for all clients in the application(for all rooms) including the sender
// 3) socket.broadcast.emit()               --> emit  for all clients in the application(for all rooms) except the sender
// 5) socket.broadcast.to('room1').emit()   --> emit  for all clients in the application(only for room1) except the sender
// 4) io.to(room1).emit()                   --> emit for all clients in the application(only for room1) including the sender

const filter = new Filter();
let counter = 0;

io.on("connection", (socket) => {
  console.log("new connection established!");

  socket.on("join", ({ username, room }, callback) => {
    const { error, user } = addUser({
      id: socket.id,
      username: username,
      room: room,
    });

    if (error) {
      return callback(error);
    }

    socket.join(user.room);

    socket.emit("message", {
      sender: user.username,
      ...generateMessage(
        `Welcome ${user.username} thanks for joining our ${user.room} room 😚`
      ),
    });
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        generateMessage(`${user.username}  joined our ${user.room} room🥳`)
      );

    const roomUsers = getRoomUsers(user.room);

    io.to(user.room).emit("shardRoom", { room: user.room, users: roomUsers });
    callback();
  });

  socket.on("sendMessage", (mesg, callback) => {
    if (filter.isProfane(mesg)) {
      return callback(generateMessage("Profane words not allowed "));
    }

    const user = getUser(socket.id);
    io.to(user.room).emit("message", {
      sender: user.username,
      ...generateMessage(mesg),
    });
    callback(generateMessage(""));
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        sender: "Admin",
        ...generateMessage(`${user.username} left us now 😌`),
      });

      const roomUsers = getRoomUsers(user.room);

      io.to(user.room).emit("shardRoom", { room: user.room, users: roomUsers });
    } else {
    }
  });

  socket.on("location", (location, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("locationMessage", {
      sender: user.username,
      ...generateLocation(
        `https://google.com/maps?q=${location.latitude},${location.longitude}`
      ),
    });

    callback(`Your location shared with all participants now`);
  });
});

const publicPath = path.join(__dirname, "./public");

const PORT = process.env.PORT || 4000;

app.use(express.static(publicPath));



server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

//! old code without  rooms

// const express = require("express");
// const socketIO = require("socket.io");
// const Filter = require("bad-words");

// const http = require("http");

// const path = require("path");
// const { generateMessage } = require("../utils/generateMessage");
// const { generateLocation } = require("../utils/generateLocation");
// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// const filter = new Filter();
// let counter = 0;

// io.on("connection", (socket) => {
//   console.log("new connection established!");

//   // socket.emit("counterUpdated", counter);
//   // socket.on("IncrementCounter", () => {
//   //   counter++;
//   // !socket.emit --> fire event only for specific connection
//   // socket.emit("counterUpdated", counter);
//   // ! io.emit --> fire event for all the related clients(connections)
//   //   io.emit("counterUpdated", counter);
//   // });

//   // ____CHALLANGE_____
//   socket.emit("message", generateMessage("Welcome! 🥳"));

//   // ! emit mesg for all clients except the sender
//   socket.broadcast.emit("message", generateMessage("New user joined us 🥳🥳"));

//   socket.on("sendMessage", (mesg, callback) => {
//     if (filter.isProfane(mesg)) {
//       return callback(generateMessage("Profane words not allowed "));
//     }

//     io.emit("message", generateMessage(mesg));
//     callback("We received your message  ");
//   });

//   socket.on("disconnect", () => {
//     io.emit("message", generateMessage("User left us now 😌"));
//   });

//   socket.on("location", (location, callback) => {
//     io.emit(
//       "locationMessage",
//       generateLocation(
//         `https://google.com/maps?q=${location.latitude},${location.longitude}`
//       )
//     );

//     callback(`Your location shared with all particepants now`);
//   });
// });

// const publicPath = path.join(__dirname, "../public");

// const PORT = process.env.PORT || 4000;

// app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
