// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var api = require('../controllers/1955.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
  	api.show(req, res)
  })
  app.get('/new/:name/', function(req,res){
    api.new(req,res)
  })
  app.get('/remove/:name/', function(req,res){
    api.remove(req,res)
  })
  app.get('/:name/', function(req,res){
    api.getinfo(req,res)
  })

}