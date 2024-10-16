import { connect } from "mongoose";

/**
 * Connects to the MongoDB instance.
 *
 * @function connectDB
 * @returns {Promise<void>}
 * @throws {Error} If there is an issue connecting to the MongoDB instance.
 */
const connectDB = async () => {
  try {
    if (!process.env.MONGO_DB_URI) {
      throw new Error("MONGO_DB_URI is not defined");
    }
    const conn = await connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
