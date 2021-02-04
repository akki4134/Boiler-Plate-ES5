const router = require("express").Router();
//const { catchErrors } = require("../handlers/errorHandlers");
const chatgroupController = require("../controllers/groupChatsController");

//const auth = require("../middlewares/auth");

//router.post("/", auth, catchErrors(chatroomController.createChatroom));

router.get("/", chatgroupController.getAllGroupChats)
router.post("/", chatgroupController.createGroupChat)


module.exports = router;
