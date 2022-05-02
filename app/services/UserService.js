const User = require("./../models/User");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin Bio");
  }
  static getInfo(user) {
    return Object.values(user);
  }
  static updateUsername(user, newUser) {
    user.setUserName = newUser;
  }
  static getAllUsernames(users) {
    return users.map((user) => user.username);
  }
}
module.exports = UserService;
