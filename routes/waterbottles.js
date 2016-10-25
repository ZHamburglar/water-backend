var express = require('express');
var router = express.Router();
var _ = require('lodash')
var Waterbottle =require('../models/waterbottle')

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['brand', 'phLevel','cost','userId'])
  next()
})

router.get('/', function (req, res) {
  //console.log('route hit');
  //console.log('req', req);
  Waterbottle.find({}).sort({[req.query.orderBy]: 1}).exec(function (err, waterbottles) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(waterbottles)
    }
  });
});


module.exports = router;
