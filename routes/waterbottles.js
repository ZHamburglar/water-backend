var express = require('express');
var router = express.Router();
var _ = require('lodash')
var Waterbottle =require('../models/waterbottle')

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['brand', 'phLevel','cost','userId'])
  next()
})

router.get('/', function (req, res) {
  Waterbottle.find({userId: req.user}, function (err, waterbottles) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(waterbottles)
    }
  });
});

router.post('/', function (req, res) {
  var waterbottle = new Waterbottle(req.body)
  waterbottle.userId = req.user;
  waterbottle.save(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(waterbottle)
    }
  })
});

router.post('http://localhost:3000/', function (req, res) {
  var waterbottle = new Waterbottle(req.body)
  waterbottle.save(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(waterbottle)
    }
  })
});

// Added the :id
router.use('/:id', function (req, res, next) {
  Waterbottle.findOne({ '_id': req.params.id, userId: req.user }, function (err, waterbottle) {
    if (err) {
      res.status(500).send()
    } else if (!waterbottle) {
      res.status(404).send()
    } else {
      res.waterbottle = waterbottle;
      next()
    }
  })
})

router.get('/:id', function (req, res) {
  res.json(res.waterbottle)
})

router.put('/:id', function (req, res) {
  var updatedWaterbottle = Object.assign(res.waterbottle, req.body)
  updatedWaterbottle.save(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(updatedWaterbottle)
    }
  })
})

router.delete('/:id', function (req, res) {
  res.waterbottle.remove(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.status(204).send()
    }
  })
})


module.exports = router;
