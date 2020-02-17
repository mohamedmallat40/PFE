const  express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');



//Alow cors
app.use(cors());





//connection to local DataBase


//online connection


mongoose.connect("mongodb+srv://Petty:Petty@cluster0-dxr7z.mongodb.net/test?retryWrites=true&w=majority" , { useNewUrlParser: true , useUnifiedTopology: true})
        .then( () => {
             console.log('Connected to the Database !');
         })
         .catch( () => {
             console.log('Connection failed !');
         })

    
//starting listnig to the server
app.listen(3000);


