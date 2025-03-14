import { Router } from 'express';
import { taskController } from '../controllers/task.controller';
import { validateTask } from '../middlewares/task.middleware';

const taskRouter = Router();

taskRouter.post('/', validateTask, taskController.createTask);
taskRouter.get('/', taskController.getTasks);
taskRouter.put('/:id', validateTask, taskController.updateTask);
taskRouter.delete('/:id', taskController.deleteTask);

export default taskRouter;
