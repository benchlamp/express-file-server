var express = require("express"),
    path = require("path"),
    fs = require("fs"),
    morgan = require("morgan");


var app = express(),
    staticPath = path.join(__dirname, "static");

    
app.use(morgan("short"));


app.use(express.static(staticPath));


app.use(function(req, res, next) {
    res.status(404);
    res.send("File not found!");
})

app.listen(process.env.PORT, function() {
    console.log("App started on port 'process.env.PORT'");
});