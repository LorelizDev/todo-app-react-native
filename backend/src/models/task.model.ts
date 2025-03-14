import { DataTypes, Model, Sequelize } from 'sequelize';
import { TaskInterface } from '../interfaces/task.interface';

export class TaskModel extends Model<TaskInterface> implements TaskInterface {
  id!: number;
  title!: string;
  completed!: boolean;

  static initModel(sequelize: Sequelize): typeof TaskModel {
    return TaskModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        completed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: 'Task',
      }
    );
  }
}
