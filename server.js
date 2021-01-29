require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
});

//Bring in the models
require("./models/User");
// require("./models/Chatroom");
// require("./models/Message");

const app = require("./app");

app.listen(process.env.PORT || 5000)