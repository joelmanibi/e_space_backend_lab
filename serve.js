var express = require('express');
const cors = require("cors");

var app = express();
var corsOptions = {
    origin: "*"
  };
app.use(cors(corsOptions));
const bodyParser = require('body-parser');
//parse request date type application/json

const db = require("./src/models");
db.sequelize.sync();

app.use(bodyParser.json());
//parse request date type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended:true}));

// for parsing multipart/form-data

//creer route pour auth,incident,mop
require('./src/routes/auth.route')(app);

// set port
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
    });
    
module.exports = app;