require('./models/User')
require('./models/Track')
const requireAuth = require('./middlewares/requireAuth')
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const trackRoute = require('./routes/trackRoutes')
var cors = require('cors')
var app = express()
app.use(cors())
const bodyParser = require('body-parser');
const mongoUri = 'mongodb+srv://Ecommerce_user:Anurag0207@everyneedsfound.77luk.mongodb.net/Tracker?retryWrites=true&w=majority'

app.use(bodyParser.json())
app.use(authRoute);
app.use(trackRoute);

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
});
mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongo instance');
})
mongoose.connection.on('error', ()=>{
    console.log('Error connecting to mongo instance');
})

app.get('/',requireAuth,(req,res)=> {
    res.send(`Hi ,${req.user.email}`)
})

app.listen(5000,()=>{
    console.log( 'Listening on Port 5000')
})