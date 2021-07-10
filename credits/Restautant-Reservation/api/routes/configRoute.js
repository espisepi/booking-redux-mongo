var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Config = require("../models/config").model;

router.get("/", function(req, res, next) {

    Config.find({ }, (err, docs) => {
        err ? res.sendStatus(400) : res.status(200).send(docs[0]);
      });
})

router.post("/", function(req, res, next) {

    const configParam = req.body;
    console.log(configParam)

    // const config = await Config.findById( configParam._id );
    
})

module.exports = router;
