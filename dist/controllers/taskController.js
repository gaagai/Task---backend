"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getTasks = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../models/taskModel"));
// Helper to extract error message
const getErrorMessage = (error) => {
    if (error instanceof Error)
        return error.message;
    return String(error);
};
// Create Task
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.create(req.body);
        res.status(201).json(task);
    }
    catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    }
});
exports.createTask = createTask;
// Get Tasks
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskModel_1.default.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    }
});
exports.getTasks = getTasks;
// Update Task
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ message: getErrorMessage(error) });
    }
});
exports.updateTask = updateTask;
