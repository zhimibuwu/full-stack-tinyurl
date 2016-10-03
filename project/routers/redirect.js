var express = require('express');
var router = express.Router();
var urlServices = require('../services/urlServices');
var path = require('path');

router.get("*", function (req, res) {
	var shortUrl = req.originalUrl.slice(1);
	// var longUrl = urlServices.getLongUrl(shortUrl);
	urlServices.getLongUrl(shortUrl, function(url) {
		if (url) {
			res.redirect(url.longUrl);
		} else {
			res.sendFile("404.html", { root: path.join(__dirname, '../public/views/')});
		}
	});
	
});

module.exports = router;