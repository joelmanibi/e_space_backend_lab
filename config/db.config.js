module.exports = {
       // HOST: "sql697.main-hosting.eu",
       // USER: "u225872299_tc",
       // PASSWORD: "Ticketchapp@2022",
       // DB: "u225872299_ticketchapp",
        HOST: "localhost",
        USER: "root",
        PASSWORD: " ",
        DB: "eespace225",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      };


//bootconst mysql = require('mysql');

// connection configurations
//const dbConn = mysql.createConnection({
    //host: 'localhost',
    //user: 'root',
    //password: ' ',
    //database: 'moncar'
    //});
    // connect to database
    //dbConn.connect(function(error){
     //   if(error) throw error;
       // console.log("Connexion a la base de donnée reussite!")
   // })

    