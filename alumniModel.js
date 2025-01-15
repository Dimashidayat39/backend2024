// models/alumniModel.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelizeInstance');

const Alumni = sequelize.define('Alumni', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    graduation_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('fresh-graduate', 'employed', 'unemployed'),
        allowNull: false
    },
    company_name: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    }
});

module.exports = Alumni;
