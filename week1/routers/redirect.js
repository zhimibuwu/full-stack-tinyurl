var express = require('express');
var router = express.Router();
var urlServices = require('../services/urlServices')

router.get("*", function (req, res) {
	var shortUrl = req.originalUrl.slice(1);
	var longUrl = urlServices.getLongUrl(shortUrl);
	res.redirect(longUrl);
});

module.exports = router;