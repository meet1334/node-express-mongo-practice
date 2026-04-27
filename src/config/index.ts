import { config } from 'dotenv';
config();
// config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const requiredEnv = ['PORT', 'DATABASE_URL', 'SECRET_KEY', 'JWT_EXPIRY'];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const { PORT, DATABASE_URL, SECRET_KEY, JWT_EXPIRY } = process.env;
