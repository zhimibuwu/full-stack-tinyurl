var express = require('express');
var app = express();  // a web app instance
var restRouter = require('./routers/rest');
var redirectRouter = require('./routers/redirect');
var indexRouter = require('./routers/index');
var mongoose = require('mongoose');

mongoose.connect("");

app.use("/public/", express.static(__dirname + "/public"));

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter);


app.listen(3000);
