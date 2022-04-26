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
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("dateUpdated");
  });
});
