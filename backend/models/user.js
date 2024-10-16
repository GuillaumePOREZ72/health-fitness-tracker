import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other user fields as needed
});

userSchema.pre("save", async function (next) {
  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (
  /** @type {string | Buffer} */ enteredPassword
) {
  return await compare(enteredPassword, this.password);
};

const User = model("User", userSchema);

export { User };
export default User;
