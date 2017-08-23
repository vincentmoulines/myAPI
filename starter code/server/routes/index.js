var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var Activity = require("../models/Activity");
var Place=  require("../models/Place");

router.get("/api/hello", (req, res, next) => {
 res.json({ message: "hello" });
});

router.get("/api/activities", (req, res, next) => {
 Activity.find().then(activity => {
   res.json(activity);
 });
});

router.get("/api/places", (req, res, next) => {
 Place.find().then(place => {
   res.json(place);
 }).catch(err => {
   next(err)
 })
});

module.exports = router;
