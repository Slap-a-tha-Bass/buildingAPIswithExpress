const express = require('express');
const path = require('path');
const morgan = require('morgan');
const motherRouter = require('./routes');

const app = express();

// help translate the code used in the routers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// allows troubleshooting in the terminal
app.use(morgan('dev'));

// mother router that utilizes all other routers' functionalities
app.use('/api', motherRouter);

// binds all of the content in the client folder to localhost:3000
app.use(express.static('client'));

app.listen(3000, () => console.log('Server Running on Port 3000!'));









