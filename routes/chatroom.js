const router = require("express").Router();
//const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomController");

//const auth = require("../middlewares/auth");

//router.post("/", auth, catchErrors(chatroomController.createChatroom));

router.get("/", chatroomController.getAllChatrooms)
router.post("/", chatroomController.createChatroom)


module.exports = router;


module.exports = router;