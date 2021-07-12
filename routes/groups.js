const router = require("express").Router();
//const { catchErrors } = require("../handlers/errorHandlers");
const chatgroupController = require("../controllers/groupChatsController");

//const auth = require("../middlewares/auth");

//router.post("/", auth, catchErrors(chatroomController.createChatroom));

router.get("/getall", chatgroupController.getAllGroupChats)
router.post("/create", chatgroupController.createGroupChat)


module.exports = router;
