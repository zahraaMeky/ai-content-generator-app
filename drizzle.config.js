/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://ai-content-generator_owner:vDdAgrNq9Iu8@ep-wispy-violet-a5ye2pk3.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require",
  }
};
