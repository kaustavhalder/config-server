const express = require("express");
const router = express.Router();
const logger = require('../util/logger')



router.route("/").post((req, res) => {
    logger.info("Config refresh endpoint has been hit")
});


async function getConfig(req, res ) {
    logger.info("getConfig function has been called")
}
console.log("module has been called")



module.exports = router;
