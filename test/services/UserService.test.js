const UserService = require("./../../app/services/UserService");
describe("Test for User Service", () => {
  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "HectorRamirezN", "Hector");
    expect(user.username).toBe("HectorRamirezN");
    expect(user.name).toBe("Hector");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
  test("2. Get All user Data in a list", () => {
    const user = UserService.create(1, "HectorRamirezN", "Hector");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("HectorRamirezN");
    expect(userInfoInList[2]).toBe("Hector");
    expect(userInfoInList[3]).toBe("Sin Bio");
  });
  test("3. Update Username", () => {
    const user = UserService.create(1, "HectorRamirezN", "Hector");
    UserService.updateUsername(user, "HectorRam");
    expect(user.username).toBe("HectorRam");
  });
  test("4. given a list of usernames return the list of usernames", () => {
    const user1 = UserService.create(1, "HectorRamirezN1", "Hector1");
    const user2 = UserService.create(2, "HectorRamirezN2", "Hector2");
    const user3 = UserService.create(3, "HectorRamirezN3", "Hector3");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("HectorRamirezN1");
    expect(usernames).toContain("HectorRamirezN2");
    expect(usernames).toContain("HectorRamirezN3");
  });
});
