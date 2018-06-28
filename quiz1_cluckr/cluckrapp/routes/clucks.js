const express = require("express");
const knex = require("../db/client");
const router = express.Router();


router.get("/", (req, res) => {
  username = req.cookies.username
  if(username){
    res.render("clucks");
}else{
  knex
    .select("*")
    .from("cluckrinfo")
    .then(info => {
      res.render("listclucks", {"info": info});
    });
}
    
});
  
router.post("/", (req, res) => {
    knex
      .insert({
        username: req.cookies.username,
        description: req.body.content,
        image_Url: req.body.image_url
      })
      .into("cluckrinfo")
      .returning("*")
      .then(([info]) => {
        console.log("Posts insert result:", info);
        res.redirect("/clucks");
      });
});
 

module.exports = router;