import { config } from 'dotenv';

config();

const DB_NAME: string | undefined = process.env.DB_NAME;
const DB_USER: string | undefined = process.env.DB_USER;
const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD;
const DB_HOST: string | undefined = process.env.DB_HOST;
const DB_PORT: string | undefined = process.env.DB_PORT;

export { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT };
