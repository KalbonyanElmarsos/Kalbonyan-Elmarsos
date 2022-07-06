const bcrypt = require("bcrypt");
const encryptPassword = async () => {
  const password = "123";
  const hashedPassword = await bcrypt.hash(password, 8);

  const isMatched = await bcrypt.compare(password, hashedPassword);
  console.log(isMatched);
};
// encryptPassword();
