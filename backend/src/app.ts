import express from 'express';
import cors from 'cors';
import taskRouter from './routes/task.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

app.use('/api/tasks', taskRouter);

export default app;
