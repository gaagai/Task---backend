"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    status: { type: String, enum: ["pending", "complete"], default: "pending" },
    assignedTo: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    shift: { type: String, enum: ["morning", "evening"], required: true },
    timestamp: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.model("Task", taskSchema);
