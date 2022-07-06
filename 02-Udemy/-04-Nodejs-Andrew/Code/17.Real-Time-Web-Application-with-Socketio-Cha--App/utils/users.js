const users = [
  { id: 1, username: "hend", room: "1" },
  { id: 2, username: "ali", room: "2" },
  { id: 3, username: "joe", room: "1" },
];

// * ADD new user
const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "Username & room required",
    };
  }

  const isUserExisting = users.find((user) => {
    return user.username === username && user.room === room;
  });
  console.log(isUserExisting);
  if (isUserExisting) {
    return { error: "Already taken, join us with another username or room " };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

// * Remove new user
const removeUser = (id) => {
  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });

  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
  return { error: "User not found" };
};

// * Get user by id
const getUser = (id) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return {error:undefined}
  }

  return user;
};

// * Get all users by room
const getRoomUsers = (room) => {
  const result = users.filter((user) => user.room === room);

  return result;
};

module.exports = { getRoomUsers, getUser, removeUser, addUser };
