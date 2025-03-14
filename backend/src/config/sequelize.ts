import { Sequelize } from 'sequelize';
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } from './enviroment';

const sequelize = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});

export default sequelize;
