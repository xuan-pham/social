import { config } from 'dotenv';
config();
export const JWT_CONFIG = {
  secret: process.env.TOKEN_SECRET,
  expiresIn: process.env.TOKEN_EXPIRED_IN,
};

export const GOOGLE_CONFIG = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
};

export const POSTGRESQL_CONFIG = {
  host: process.env.POSTGRES_HOST || '',
  username: process.env.POSTGRES_USER || '',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DB || '',
};

export const MAIL_CONFIG = {
  host: process.env.MAIl_HOST,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASSWORD,
  mailFrom: process.env.MAIL_FROM,
};

export const NODE_ENV = process.env.NODE_ENV;
