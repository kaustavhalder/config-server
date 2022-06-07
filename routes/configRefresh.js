const express = require("express");
const router = express.Router();
const logger = require('../util/logger')



router.route("/").post((req, res) => {
    logger.info("Config refresh endpoint has been hit")
});

function getConfig = async (req, res ) => {
    logger.info("Asynch fucntion for get config called")
}
moduele.exports = router;
