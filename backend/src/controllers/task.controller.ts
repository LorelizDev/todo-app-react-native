import { Request, Response } from 'express';
import { TaskModel } from '../models/task.model';

export const taskController = {
  createTask: async (req: Request, res: Response) => {
    try {
      const { title, completed } = req.body;
      const task = await TaskModel.create({
        title,
        completed,
      });
      res.status(201).json({ message: '✅ Task created successfully', task });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '❌ Failed to create task' });
    }
  },

  getTasks: async (req: Request, res: Response) => {
    try {
      const tasks = await TaskModel.findAll();
      res.status(200).json({ message: '✅ Tasks fetched successfully', tasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '❌ Failed to fetch tasks' });
    }
  },

  updateTask: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const task = await TaskModel.findByPk(id);
      if (!task) {
        res.status(404).json({ message: '❌ Task not found' });
        return;
      }
      await TaskModel.update({ title, completed }, { where: { id } });
      res.status(200).json({ message: '✅ Task updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '❌ Failed to update task' });
    }
  },

  deleteTask: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const task = await TaskModel.findByPk(id);
      if (!task) {
        res.status(404).json({ message: '❌ Task not found' });
        return;
      }
      await TaskModel.destroy({ where: { id } });
      res.status(200).json({ message: '✅ Task deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '❌ Failed to delete task' });
    }
  },
};
