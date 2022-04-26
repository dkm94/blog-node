const express = require("express");
const mainRouter = express.Router();

const postRouter = require("./PostRoutes");
const categoryRouter = require("./CategoryRoutes");

mainRouter.use("/api", postRouter);
mainRouter.use("/api", categoryRouter);

module.exports = mainRouter;