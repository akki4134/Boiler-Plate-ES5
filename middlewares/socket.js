
module.exports = (io) => {
    io.on("connection", socket => {
        console.log("socket connected");
        socket.on("chat message", msg => {
            console.log(msg);
            io.emit("chat message", msg);
        })
    });
};