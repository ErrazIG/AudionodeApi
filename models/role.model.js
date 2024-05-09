'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** role model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const Role = sequelize.define('role', {
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
    }, {
        timestamps: false,
    });
    return Role;
}