const express = require("express")
const knex = require("../database/db.connect")
const router = express.Router()
router.use(express.json())

router.get("/home",(req, res) =>{
    res.send("You are in home page.")
})

router.get("/id",(req, res)=>{
    res.send("This is your id 12ABC34")
})

module.exports = router