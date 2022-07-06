const jwt = require("jsonwebtoken");

const name = "ali";
const age = 27;
const token = jwt.sign({ name, age }, "secret", { expiresIn: "7 days" });
console.log(token);
const data = jwt.verify(token, "secret");
console.log(data);
