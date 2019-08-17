const Sequelize = require('sequelize');
const common = require('./common');

const chalk = common.chalk;
const spinner = common.spinner;

const mysql = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',
    database: 'cpc',
    dialect: 'mysql'

    //数据库配置
};const db = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: mysql.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        define: {
            timestamps: true
        }
    }
});

module.exports = db;