'use strict';

import { Sequelize, DataTypes } from "sequelize";

/** user likes model
 * @param {Sequelize} sequelize
 * @returns
 */

export default (sequelize) => {

    const UserLikes = sequelize.define('user_likes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
    return UserLikes;
}