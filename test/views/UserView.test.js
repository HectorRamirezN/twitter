const UserView = require("./../../app/views/UserView");

describe("Test for UserView", () => {
  test("Return an object when try to create a new user with an null playload", () => {
    const playload = null;
    const result = UserView.createUser(playload);
    expect(result.error).toMatch(/El playload no existe/);
  });
  test("Return an error object when try to create a new user with a playload with invalid properties", () => {
    const playload = { username: null, name: 12, id: "id" };
    const result = UserView.createUser(playload);
    expect(result.error).toMatch(/necesitan tener un valor válido/);
  });
  test("Return an error object when try to create a new user with a playload with missing properties", () => {
    const playload = { userame: "Username" };
    const result = UserView.createUser(playload);
    expect(result.error).toMatch(/necesitan tener un valor válido/);
  });
  test("Create a user by given valid playload", () => {
    const playload = { username: "HectorRamirezN", name: "Hector", id: 1 };
    const result = UserView.createUser(playload);
    expect(result.name).toBe("Hector");
    expect(result.username).toBe("HectorRamirezN");
    expect(result.id).toBe(1);
  });
});
