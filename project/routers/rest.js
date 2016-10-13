var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlServices = require('../services/urlServices');
var statsService = require('../services/statsService');

router.post("/urls", jsonParser, function(req, res) {
	var longUrl = req.body.longUrl;
	urlServices.getShortUrl(longUrl, function(url) {
		res.json(url);
	});
});

router.get("/urls/:shortUrl", function(req, res) {
	var shortUrl = req.params.shortUrl;
	urlServices.getLongUrl(shortUrl, function(url) {
		res.json(url);
	});
});

router.get("/urls/:shortUrl/:info", function(req, res) {
	statsService.getUrlInfo(req.params.shortUrl, req.params.info, function(data) {
		res.json(data);
	});
});

module.exports = router;
