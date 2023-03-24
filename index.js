
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

const userRoute= require("./src/route/users/users.route");

const themesRoute= require("./src/route/themes/themes.route");
const topicsRoute= require("./src/route/topics/topics.route");
//RUTA RAIZ ES ESE GET
//LLAMADA A LA RUTA DE LOS CASOS DE USO, EN ESTE CASO DE USER AL INICIO DE LA APLICACION
userRoute(app);
themesRoute(app);
topicsRoute(app);
app.listen(3000);