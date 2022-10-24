import { registerAs } from "@nestjs/config";

export default registerAs('globalConfig', () => ({
    databaseUrl: process.env.DATABASE_URL,
    port: process.env.PORT,
})
)