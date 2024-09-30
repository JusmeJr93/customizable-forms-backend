import { Sequelize } from 'sequelize';
import config from '../config/db.js';


const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

let sequelize;

if (environment === 'production') {
    sequelize = new Sequelize(process.env.JAWSDB_URL, {
        dialect: dbConfig.dialect,
    });
} else {
    sequelize = new Sequelize(
        dbConfig.database, dbConfig.username, dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
    });
}

export default sequelize;