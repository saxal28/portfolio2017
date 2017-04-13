const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("./index");
})

app.get("/gallery", (req, res) => {
    res.render("gallery.ejs");
})

app.listen(port);
console.log('started on port 8080');