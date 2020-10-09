const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(user => user.room === name && user.name === room);
  
  if (existingUser) {
    return { error: 'Username is taken'};
  }

  const user = { id, name, room };
  users.push(user);
  
  return { user };
};

const removeUser = (id) => {
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = (id) => users.find(user => user.id === id);

const getUsersInRoom = (room) => users.filter(user => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};