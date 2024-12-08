import { Request, Response } from "express";
import Task, { ITask } from "../models/taskModel";

// Helper to extract error message
const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

// Create Task
export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITask = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

// Get Tasks
export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks: ITask[] = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};

// Update Task
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task: ITask | null = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: getErrorMessage(error) });
  }
};
