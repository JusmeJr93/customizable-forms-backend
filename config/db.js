import dotenv from 'dotenv';
dotenv.config();

const config = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT
    },
    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql',
    }
};

export default config

