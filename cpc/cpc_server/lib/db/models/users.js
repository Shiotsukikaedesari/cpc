const sequelize = require('sequelize');
const db = require('../config');
const common = require('../common');

const chalk = common.chalk;

const Users = db.define('users', {
    uid: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncerment: true
    },
    uname: {
        type: sequelize.STRING(64),
        allowNull: false
    },
    upwd: {
        type: sequelize.STRING(64),
        allowNull: false
    }
});

module.exports = Users;