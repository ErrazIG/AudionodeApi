'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** songs model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const Song = sequelize.define('song', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "../../public/songs/default",
            unique: true,
        },
        file: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
    return Song;
}