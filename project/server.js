var express = require('express');
var app = express();  // a web app instance
var restRouter = require('./routers/rest');
var redirectRouter = require('./routers/redirect');
var indexRouter = require('./routers/index');
var mongoose = require('mongoose');
var useragent = require('express-useragent');

mongoose.connect("mongodb://user:user@ds049436.mlab.com:49436/tinyurl");

app.use("/public/", express.static(__dirname + "/public"));

app.use(useragent.express());

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter);


app.listen(3000);
