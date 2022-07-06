const app = require("./index.js");
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
});
