const express = require('express')

const router = express.Router()


router.route('/auth').get((req,res) => {
    console.log('auth router has been hit')
    res.json({"status":"success"})
})