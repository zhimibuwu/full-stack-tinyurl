var express = require('express');
var router = express.Router();
var urlServices = require('../services/urlServices');
var path = require('path');

router.get("*", function (req, res) {
	var shortUrl = req.originalUrl.slice(1);
	var longUrl = urlServices.getLongUrl(shortUrl);
	if (longUrl) {
		res.redirect(longUrl);
	} else {
		res.sendFile("404.html", { root: path.join(__dirname, '../public/views/')});
	}
});

module.exports = router;