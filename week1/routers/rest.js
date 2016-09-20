var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlService = require('../services/urlServices');

router.post("/urls", jsonParser, function (req, res) {
	var longUrl = req.body.longUrl;
	var shortUrl = urlService.getShortUrl(longUrl);
	res.json({
		shortUrl: shortUrl,
		longUrl: longUrl
	});
});

module.exports = router;