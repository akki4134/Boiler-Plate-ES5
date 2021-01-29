const router = require("express").Router();
// const { catchErrors } = require("../handlers/errorHandlers");
const userController = require("../controllers/userController");

router.post("/register", userController.register)
router.get("/getallusers", userController.getallusers)
router.post("/fetchuser", userController.fetchuser)
router.get("/checkusername", userController.checkusername)



module.exports = router;