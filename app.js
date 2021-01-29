const express = require("express");
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Setup Error Handlers

// const errorHandlers = require("./handlers/errorHandlers");
// app.use(errorHandlers.notFound);
// app.use(errorHandlers.mongoseErrors);
// if (process.env.ENV === "DEVELOPMENT") {
//     app.use(errorHandlers.developmentErrors);
// } else {
//     app.use(errorHandlers.productionErrors);
// }

//middleware
const userRouter = require('./routes/user')


//Bring in the routes
app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.send('connected')
});





module.exports = app;