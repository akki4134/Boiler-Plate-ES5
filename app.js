const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());


// //Setup Error Handlers
// const errorHandlers = require("./handlers/errorHandlers");
// app.use(errorHandlers.notFound);
// app.use(errorHandlers.mongoseErrors);
// if (process.env.ENV === "DEVELOPMENT") {
//   app.use(errorHandlers.developmentErrors);
// } else {
//   app.use(errorHandlers.productionErrors);
// }

//middleware
const userRouter = require('./routes/user')
const groupsRouter = require('./routes/groups')

//Bring in the routes
app.use('/user', userRouter);
app.use('/groups', groupsRouter);

app.get('/', (req, res) => {
    res.send('connected')
});

module.exports = app;