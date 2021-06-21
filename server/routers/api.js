const express = require('express')
const router = express.Router()
const User = require("../user.json")


router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/login', (req, res) => {
    let userData = req.body
    console.log(userData);
    console.log(User);
    if (User.filter(user => (userData.email === user.email) && (userData.password === user.password)).length > 0) {
       
        res.send({
            success: true
        })
    } else {
        res.send({
       success:false
        })
    }
})



module.exports = router