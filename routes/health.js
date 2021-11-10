const express  = require('express')

const router = express.Router()

router.route('/').all((req,res) => {
    res.send("application is up")
})


module.exports = router