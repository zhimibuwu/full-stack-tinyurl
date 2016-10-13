var express = require('express');
var router = express.Router();
var urlServices = require('../services/urlServices');
var statsService = require('../services/statsService');
var path = require('path');

router.get("*", function (req, res) {
	var shortUrl = req.originalUrl.slice(1);
	urlServices.getLongUrl(shortUrl, function(url) {
		if (url) {
			res.redirect(url.longUrl);
			statsService.logRequest(shortUrl, req);
		} else {
			res.sendFile("404.html", { root: path.join(__dirname, '../public/views/')});
		}
	});
});

module.exports = router;
