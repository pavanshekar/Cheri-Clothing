const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const userRouter = require('./routes/userRouter')

const requestLogger = require('./utilities/RequestLogger')
const errorLogger = require('./utilities/ErrorLogger')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(requestLogger);

app.use('/user', userRouter)

app.get('/', (req, res)=>{
    res.send("Welcome to Cheri")
})

app.use(function (req, res) {
    return res.status(404).send({message: "Route not found"} )
})

app.use(errorLogger)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server started in port ${PORT}`));


module.exports = app;