const Sequelize = require('sequelize');
const config = require('../config');

const Employee = config.define('employees', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    avatar: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Employee;
