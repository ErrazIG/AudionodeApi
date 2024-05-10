"use strict";
import * as yup from "yup";

const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\d\s]).{8,}$/;

export const memberLoginValidator = yup.object().shape({
  username: yup
    .string()
    .typeError("Le pseudo est invalide")
    .trim()
    .required("Le pseudo est obligatoire")
    .min(2, "Le pseudo doit faire minimum 2 lettres")
    .max(50, "Le pseudo doit faire maximum 50 lettres"),

    password: yup.string().typeError("Le mot de passe est invalide"),
});

export const memberRegisterValidator = yup.object().shape({
  username: yup
    .string()
    .typeError("Le pseudo est invalide")
    .required("Le pseudo est obligatoire"),
  email: yup
    .string()
    .typeError("L'email est invalide")
    .email("le format ne correspond pas a un email")
    .required("L'email est obligatoire"),
  confirmEmail: yup
    .string()
    .typeError("L'email de confirmation est invalide")
    .required("L'email de confirmation est obligatoire")
    .oneOf([yup.ref("email")], "Les adresses email doivent correspondre"),
  password: yup
    .string()
    .typeError("Le mot de passe est invalide")
    .matches(
      pwdRegex,
      "Votre mot de passe doit contenir au moins 8 caractères, incluant une majuscule, une minuscule, un chiffre et un caractère spécial."
    )
    .required("Le mot de passe est obligatoire"),
  confirmPassword: yup
    .string()
    .typeError("Le mot de passe de confirmation est invalide")
    .required("Le mot de passe de confirmation est obligatoire")
    .oneOf([yup.ref("password")], "Les mots de passe doivent correspondre"),
});