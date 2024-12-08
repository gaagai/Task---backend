import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  role: "admin" | "manager";
  shift: "morning" | "evening";
}

const userSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["admin", "manager"], required: true },
  shift: { type: String, enum: ["morning", "evening"], required: true },
});

export default mongoose.model<IUser>("User", userSchema);
