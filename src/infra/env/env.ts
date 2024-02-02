import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(4000),
  JWT_PUBLIC_KEY: z.string(),
  JWT_PRIVATE_KEY: z.string()
})

export type Env = z.infer<typeof envSchema>