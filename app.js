const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// io.on('connection', socket => {
//     socket.emit('request', /* … */); // emit an event to the socket
//     io.emit('broadcast', /* … */); // emit an event to all connected sockets
//     socket.on('reply', () => { /* … */ }); // listen to the event
// });



io.on('connection', function (socket) {
    console.log('socket connected')
})

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

// require("./middlewares/socket")(io);



const userRouter = require('./routes/user')


//Bring in the routes
app.use('/user', userRouter);


app.get('/', (req, res) => {
    res.send('connected')
});





module.exports = app;