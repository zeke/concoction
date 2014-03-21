var http = require('http')
var url = require('url')
var fs = require('fs')
var addons = require('heroku-addons')
var route = require('router')()

route.get('/', function(req, res) {

  var query = url.parse(req.url, true).query

  if (query && query.slugs) {
    addons.mix(query.slugs.split(','), function (err, mix) {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS"
      })
      res.write(JSON.stringify(mix))
      res.end()
    })
  } else {
    res.writeHead(302, {'Location': 'https://github.com/zeke/addons-mixer'})
    res.end()
  }

})

http.createServer(route).listen(process.env.PORT || 5000)
