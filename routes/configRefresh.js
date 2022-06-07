const express = require("express");
const router = express.Router();

router.route("/").post((req, res) => {
  console.log("Config Refresh Endpoint has been hit");
});

moduele.exports = router;
