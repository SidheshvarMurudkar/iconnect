const express = require("express");
const UserCtrl = require("./user.controller");

const userRouter = express.Router();

userRouter.post("/", UserCtrl.createUser);
userRouter.post("/login", UserCtrl.authenticate);

module.exports = userRouter;
