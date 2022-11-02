const express = require("express");
const { login, signup, logout, forgotPassword } = require("../controllers/user");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);
authRouter.get("/logout", logout);
authRouter.put("forgot-password", forgotPassword);

module.exports = {
    authRouter,
};
