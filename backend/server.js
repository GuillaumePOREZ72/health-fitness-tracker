import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";

import {
  createUser,
  login,
  getAllUsers,
  updateUser,
  deleteUser,
} from "./controllers/userController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(express.json());

// User routes
app.post("/users", createUser);
app.post("/login", login);
app.delete("/delete/users", deleteUser);
app.put("/update/users", updateUser);
app.get("/users", getAllUsers);

// Error handling middleware
// @ts-ignore
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Connect to MongoDB
if (!process.env.MONGO_DB_URI) {
  throw new Error("MONGO_DB_URI environment variable is not set");
}

connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
