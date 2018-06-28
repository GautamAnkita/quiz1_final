const express = require("express");
const knex = require("../db/client");
const router = express.Router();


router.get('/', (req, res, next) => {
    res.clearCookie("username");
    username = "";
    res.render('index',{"username": username});
  
});
module.exports = router;