const {
  dbSetup,
  user1,
  user2,
  user1Id,
  user2Id,
  task1,
  task2,
  task3,
} = require("./fixtures/db");
const app = require("../src/index.js");
const request = require("supertest");
const Task = require("../src/models/task");

beforeEach(async () => {
  await dbSetup();

  console.log("Run before each test suit");
});

test("Should create new task", async () => {
  const res = await request(app)
    .post("/tasks")
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .send({ description: "test task" })
    .expect(201);

  const task = await Task.findById(res.body._id);

  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

test("Should fetching  tasks", async () => {
  await request(app)
    .get("/tasks")
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should delete tasks", async () => {
  const res = await request(app)
    .delete(`/tasks/${task1._id}`)
    .set("authorization", `Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(404);

  const Task = await Task.findById(task1._id);
  expect(task).not.toBeNull();
});
