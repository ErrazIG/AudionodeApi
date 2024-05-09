'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** member model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const Member = sequelize.define('member', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "../../public/users/default",
        },
    }, {
        timestamps: false,
    });
    return Member;
}