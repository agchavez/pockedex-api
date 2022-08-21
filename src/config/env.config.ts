export const EnvConfiguration = () => ({
    enviroment : process.env.NODE_ENV || 'dev',
    mongodb : process.env.MONGODB_URI,
    port : +process.env.PORT || 8080,
    defaultLimit : +process.env.DEFAULT_LIMIT || 12,
});