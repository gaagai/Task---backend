import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  status: "pending" | "complete";
  assignedTo: mongoose.Schema.Types.ObjectId;
  shift: "morning" | "evening";
  timestamp: Date;
}

const taskSchema: Schema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "complete"], default: "pending" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  shift: { type: String, enum: ["morning", "evening"], required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<ITask>("Task", taskSchema);
