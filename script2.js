// var data = require("./script")

// console.log(data);

const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log("Hello from middleware");
    next();
});

app.use(function(req, res, next){
    console.log("Hello from middleware 2");
    next();
});

app.get('/', function (req, res) {
  res.send('hi World')
})

app.get('/profile', function (req, res) {
    res.send('hi from profile')
})

app.listen(3000)


/*
express framework for node.js
express ka use case => routing
routing =>
https://www.facebook.com/profile/sarthak/aihfbafskbfafbksdn
routes - /profile
different url
/profile = profile
/contact = contact
/like/afjjfs = like comment

route types =>
GET POST PUT PATCH DELETE
Restful-api

get route. can see data in url
if entering password use POST route.

*/