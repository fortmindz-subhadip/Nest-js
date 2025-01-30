import * as mongoose from 'mongoose';

// Define the schema
export const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, default: '' },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true },
);
