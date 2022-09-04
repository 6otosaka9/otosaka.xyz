_path = process.cwd();
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(_path + "/views/home.html");
});

module.exports = router;