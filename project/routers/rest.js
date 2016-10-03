var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlServices');

router.post("/urls", jsonParser, function(req, res) {
	var longUrl = req.body.longUrl;
	// var shortUrl = urlService.getShortUrl(longUrl);
	urlService.getShortUrl(longUrl, function(url) {
		res.json(url);	
	});
	// res.json({
		// shortUrl: shortUrl,
		// longUrl: longUrl
	// });
});

router.get("/urls/:shortUrl", function(req, res) {
	var shortUrl = req.params.shortUrl;
	// var longUrl = urlService.getLongUrl(shortUrl);
	urlServices.getLongUrl(shortUrl, function(url) {
		res.json(url);
	});
	// res.json({
		// shortUrl: shortUrl,
		// longUrl: longUrl
	// });
});

module.exports = router;