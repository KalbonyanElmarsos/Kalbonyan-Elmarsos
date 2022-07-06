const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const Task = require("./task");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
      validate(value) {
        if (validator.contains(value.toLowerCase(), "password")) {
          throw new Error("Password can not contain word password");
        }
      },
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("Age can  not be negative value");
        }
      },
    },
    tokens: [{ token: { type: String, required: true } }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});

userSchema.methods.toJSON = () => {
  const user = this;

  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};
userSchema.methods.generateToken = async () => {
  const user = this;
  const token = await jwt.sign({ _id: user._id.toString() }, "secret");

  user.tokens = user.tokens.concat({ token });

  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new error("unable to login");
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    throw new Error("wrong Credentials");
  }
  return user;
};
userSchema.pre("save", async (next) => {
  console.log("pre");
  console.log(this);

  next();
});

userSchema.pre("remove", async (next) => {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});
module.exports = User;
