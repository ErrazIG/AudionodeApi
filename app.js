import 'dotenv/config';
import express from "express";
import morgan from 'morgan';

//Accessibilité aux variables d'env
const { NODE_ENV, PORT } = process.env;

//WEB API
//Initialisation
const app = express();

//Middlewares
app.use(express.json());
app.use(morgan('short'));

//Routing

//Lancement du serv
app.listen(PORT, () => {
    console.log(`Web API is running on ${PORT} (${NODE_ENV})`);
})