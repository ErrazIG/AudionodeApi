'use strict';
import { Sequelize } from "sequelize";
import MemberBuilder from "../models/member.model.js";
import RoleBuilder from "../models/role.model.js";
import SongsBuilder from "../models/song.model.js";
import UserLikesBuilder from "../models/user-likes.model.js";


const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
});

const db = {};

db.sequelize = sequelize;

db.Members = MemberBuilder(sequelize);
db.Roles = RoleBuilder(sequelize);
db.Songs = SongsBuilder(sequelize);
db.UserLikes = UserLikesBuilder(sequelize);

db.Roles.hasMany(db.Members, {
    foreignKey: 'role_id'
})
db.Members.belongsTo(db.Roles, {
    foreignKey: 'role_id'
});

db.Members.hasMany(db.Songs, {
    foreignKey: 'member_id'
})
db.Songs.belongsTo(db.Members, {
    foreignKey: 'member_id'
});

db.Members.belongsToMany(db.Songs, {
    through: db.UserLikes,
    foreignKey: 'member_id',
    otherKey: 'song_id'
});
db.Songs.belongsToMany(db.Members, {
    through: db.UserLikes,
    foreignKey: 'song_id',
    otherKey: 'member_id'
});

export default db;