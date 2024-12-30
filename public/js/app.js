

const  express = require('express');

const cors = require('cors');

const path = require('path');

const paseadoresRoutes = require('./routes/paseadores');

const app = express();


 app.use(cors());

 app.use(expres.json());


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', paseadoresRoutes);


module.exports = app;

