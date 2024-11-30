import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://ai_owner:YpFnC0S2ENrH@ep-fragrant-flower-a597amyp.us-east-2.aws.neon.tech/ai?sslmode=require',
  },
});
