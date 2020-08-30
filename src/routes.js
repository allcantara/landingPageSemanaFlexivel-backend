const express = require("express");

const { UserController } = require("./app/controllers");

const { UserValidation } = require("./app/validations");

const router = express.Router();

router.post("/users", UserValidation, UserController.create);
router.get("/users", UserController.index);
// router.get("/users/:id", UserController.show);

module.exports = router;
