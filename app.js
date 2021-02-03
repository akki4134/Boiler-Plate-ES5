const express = require("express");
const app = express();
const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server).sockets;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { onConnect } = require('./middlewares/socket')

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
io.on('connection', onConnect)
const userRouter = require('./routes/user')


//Bring in the routes
app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.send('connected')
});





module.exports = app;