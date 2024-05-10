import { MemberDTO } from "../dto/memberDTO.js";
import argon2 from "argon2";
import db from "../models/index.js";


const authService = {

    login: async (username, password) => {

        const member = await db.Member.findOne({ where: { username } });
        if (!member) {
            return null;
        }

        const pwdIsValid = await argon2.verify(member.hash_password, password);
        if (!pwdIsValid) {
            return null;
        }

        return new MemberDTO(member);

    },

    register: async (userData) => {

        //Vérifier si existe deja
        const userExists = await db.Members.findOne({
            where: {
                email: userData.email,
                username: userData.username,
            }

        });

        //Si existe, error
        if (userExists) {
            return 'L\'utilisateur existe déjà.';
        }

        //Hashe pwd
        const hashedPassword = await argon2.hash(userData.password);


        //Ajout en DB
        const userCreated = await db.Members.create({
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            role_id: 3,
        });

        return new MemberDTO({
            ...userCreated.dataValues
        });
    },
};

export default authService;