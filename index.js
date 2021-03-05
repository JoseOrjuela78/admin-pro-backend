require('dotenv').config();
const express = require('express');
var cors = require('cors');
const { dbConnection } = require('./database/config');



// Crear el servidor de express
const app = express();

// Configirar cors

app.use(cors());

// base de datos

dbConnection();

app.listen(process.env.PORT, () => {
    console.log('Server run port ' + process.env.PORT);
});