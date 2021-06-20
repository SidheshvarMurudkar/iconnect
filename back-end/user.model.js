const mongoose = require("mongoose");

const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const UserSchema = new Schema({
  userId: { type: Number },
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

UserSchema.plugin(AutoIncrement, { inc_field: "userId" });
const User = mongoose.model("User", UserSchema);

module.exports = User;
