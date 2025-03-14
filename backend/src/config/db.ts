import sequelize from './sequelize';
import { TaskModel } from '../models/task.model';

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    TaskModel.initModel(sequelize);
    await sequelize.sync({ alter: true });
    console.log('Database tables synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export default connectDB;
