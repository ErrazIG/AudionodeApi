import 'dotenv/config';
import express from "express";
import morgan from 'morgan';
import db from './models/index.js';

//Accessibilité aux variables d'env
const { NODE_ENV, PORT } = process.env;


//DB Connection
db.sequelize.authenticate()
    .then(() => console.log('Connection wit Database has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

    if (NODE_ENV === 'dev') {
        // db.sequelize.sync({ alter: { drop: false} });
    }

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