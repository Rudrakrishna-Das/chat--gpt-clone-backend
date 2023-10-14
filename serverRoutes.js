const express = require("express");

const controller = require("./serverController");

const router = express.Router();

router.post("/completions", controller.getSomething);

module.exports = router;
