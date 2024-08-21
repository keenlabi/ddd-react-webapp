// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
declare namespace NodeJS {
    interface ProcessEnv {
        PORT:string;
        MONGO_URI:string;
        SESSION_VALIDITY_IN_HRS:string;
        JWT_SECRET_KEY:string;
        REDIS_HOST:string;
        REDIS_PORT:string;
    }
}