var longToShortHash = {};
var shortToLongHash = {};

var getShortUrl = function (longUrl) {
	if (longToShortHash[longUrl] != null) {
		return longToShortHash[longUrl];
	} else {
		var shortUrl = generateShortUrl();
		longToShortHash[longUrl] = shortUrl;
		shortToLongHash[shortUrl] = longUrl;
		return shortUrl;
	}
};

var generateShortUrl = function () {
	return Object.keys(longToShortHash).length;
};

module.exports = {
	getShortUrl: getShortUrl
};