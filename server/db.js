const mongoose = require('mongoose');
URI=process.env.MONGO_URI;
require('dotenv').config();


mongoose.connect(URI)
.then(()=>{
    console.log('connected to mongoose');
}).catch((err)=>{
   console.log("mongoose connection error: " + err)
});

