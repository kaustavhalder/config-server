const express = require('express')

const router = express.Router()

// Custom Imports 

const authController = require('../controller/authController')


router.route('/').get((req,res) => {
    console.log('auth router has been hit')
    res.json({"status":"success"})
})



module.exports = router;