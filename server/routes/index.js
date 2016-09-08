var express = require('express');
var router = express.Router();

var authController = require("../controllers/authController")
var userController = require("../controllers/userController")

router.get('/', function(req, res, next) {
  res.send({message: 'hello'});
});

router.post("/login", authController.login)
router.post("/register", authController.register)
router.get("/user", authController.verifyToken, userController.user)

module.exports = router;
