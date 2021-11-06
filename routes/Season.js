var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Season', { title: 'Search Results Season' });
});

module.exports = router;
