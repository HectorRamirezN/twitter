const UserService = require("./../services/UserService");
class UserView {
  static createUser(playload) {
    if (playload === null) {
      console.log("Error es null");
      return { error: "El playload no existe" };
    } else if (
      typeof playload.username === "string" &&
      typeof playload.name === "string" &&
      typeof playload.id === "number"
    ) {
      return UserService.create(playload.id, playload.username, playload.name);
    } else {
      return {
        error:
          "Error, las propiedades del playload necesitan tener un valor válido",
      };
    }
  }
}
module.exports = UserView;
