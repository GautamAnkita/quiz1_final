const express = require("express");
const knex = require("../db/client");
const router = express.Router();


router.get('/', (req, res, next) => {
res.render('signin');
  
});

router.post('/', (req, res, next) => {
  const username = req.body.exampleInputName;
      res.cookie('username', username);
      res.render('index',{"username": username});
  
});

module.exports = router;