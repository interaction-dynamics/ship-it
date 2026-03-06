import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/services/database/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  schemaFilter: ['evaluation'],
  dbCredentials: {
    url: process.env.DATABASE_URL ?? '',
  },
})
