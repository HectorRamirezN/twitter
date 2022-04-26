const User = require("./../app/models/User");
describe("unit test for user class", () => {
  test("Create an User Object", () => {
    const user = new User(
      1,
      "hectorramirez",
      "hector",
      "bio",
      "dateCreated",
      "dateUpdated"
    );
    expect(user.id).toBe(1);
    expect(user.username).toBe("hectorramirez");
    expect(user.bio).toBe("bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
  test("Add getters", () => {
    const user2 = new User(2, "amparo4343", "Amparo", "Bio");
    expect(user2.getUsername).toBe("amparo4343");
    expect(user2.getBio).toBe("Bio");
    expect(user2.getDateCreated).not.toBeUndefined();
    expect(user2.getLastUpdate).not.toBeUndefined();
  });
  test("Add Setters", () => {
    const user = new User(
      1,
      "hectorramirez",
      "hector",
      "bio",
      "dateCreated",
      "dateUpdated"
    );
    user.setUserName = "Pancho";
    expect(user.username).toBe("Pancho");
    user.setBio = "Hola soy yo";
    expect(user.bio).toBe("Hola soy yo");
  });
});
