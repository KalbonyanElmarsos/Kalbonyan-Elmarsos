const request = require("supertest");
const { dbSetup, user1, user1Id } = require("./fixtures/db");
const app = require("../src/index.js");
const User = require("../src/models/user");

beforeEach(async () => {
  await dbSetup();

  console.log("Run before each test suit");
});

// afterEach(()=>{
// console.log('Run after  each test suit')
// })

jest.setTimeout(10000);

test("Create new user ", async () => {
  const response = await request(app)
    .post("/users")
    .send({ name: "test", email: "test@example.com", password: 12345678 })
    .expect(201);

  const user = await User.findById(response.body._id);
  expect(user).not.toBeNull();

  expect(response.body).toMatchObject({
    user: { name: "jo", email: "joe@example.com" },
    token: usr.tokens[0].token,
  });

  expect(user.password).not.toBe("any thing else");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: user1.email,
      password: user1.password,
    })
    .expect(200);

  const user = await User.findById(user1Id);

  expect(response.body.token).toBe(user.tokens[1].token);
});

test("Should fail login with bad request", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: user1.email,
      password: user1.password + "x",
    })
    .expect(500);
});

test("Should get user(authorized) Profile", async () => {
  await request(app)
    .get("/users/me")
    .send()
    .set("authorization", user1.tokens[0].token)
    .expect(200);
});

test("Should fail to get user(Un authorized) Profile", async () => {
  await request(app).get("/users/me").send().expect(200);
});

test("Should delete  user( authorized) Profile", async () => {
  await request(app)
    .delete("/users/me")
    .send()
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .expect(200);

  const user = await User.findById(user1Id);

  expect(user).toBeNull();
});

test("Should fail to delete user(Un authorized) Profile", async () => {
  await request(app).delete("/users/me").send().expect(200);
});

test("Should  upload new avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .attach("avatar", "test/fixtures/profile-pic.jpg")
    .expect(200);

  const user = await User.findById(user1Id);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("Should update user", async () => {
  await request(app)
    .patch("/users/me")
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .send({ name: "joe2" })
    .expect(200);

  const user = await User.findById(user1Id);
  expect(user.name).toEqual("joe2");
});

test("Should user update failed", async () => {
  await request(app)
    .patch("/users/me")
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .send({ anything: "value" })
    .expect(500);
});
