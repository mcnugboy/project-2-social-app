const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Favorites extends Model {}

Favorites.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        song_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favorites'
    }
);

module.exports = Favorites;
