var longToShortHash = {};
var shortToLongHash = {};

var encode = [];

var genCharArray = function(charA, charZ) {
	var arr = [];
	var i = charA.charCodeAt(0);
	var j = charZ.charCodeAt(0);
	for (; i <= j; i++) {
		arr.push(String.fromCharCode(i));
	}
	return arr;

};

encode = encode.concat(genCharArray('a','z'));
encode = encode.concat(genCharArray('A','Z'));
encode = encode.concat(genCharArray('0','9'));

var getShortUrl = function(longUrl) {
	if (longUrl.indexOf('http') === -1) {
		longUrl = "http://" + longUrl;
	}

	if (longToShortHash[longUrl] != null) {
		return longToShortHash[longUrl];
	} else {
		var shortUrl = generateShortUrl();
		longToShortHash[longUrl] = shortUrl;
		shortToLongHash[shortUrl] = longUrl;
		return shortUrl;
	}
};

var generateShortUrl = function() {
	return convertTo62(Object.keys(longToShortHash).length);
};

var convertTo62 = function(num) {
	var result = "";
	do {
		result = encode[num % 62] + result;
		num = Math.floor(num / 62);
	} while (num);

	return result;
}

var getLongUrl = function(shortUrl) {
	return shortToLongHash[shortUrl];
};

module.exports = {
	getShortUrl: getShortUrl,
	getLongUrl: getLongUrl
};