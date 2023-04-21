const express = require('express')
const mongoose = require('mongoose')
const app = express();
const config = require('dotenv');
const middleware = require('./config/middleware');
config.config({path:"./config/config.env"})
const PORT = process.env.PORT;
const URI = process.env.URI;



mongoose.connect(URI)
mongoose.connection.on('connected',()=>{
    console.log("successfully connected to the database");
})


app.use(express.json())
app.use(express.urlencoded({extended:false}))


require('./schema/fitness')
require('./schema/exercise')

app.use('/api/vi',require('./router/router'))
app.use('/api/vi/exercise',middleware,require('./router/exer.route'))




app.listen(PORT,()=>{
    console.log(`Connect to ${PORT}`);
})






