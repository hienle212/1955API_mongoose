var mongoose = require('mongoose');
var API = mongoose.model('API');
module.exports = {
  show: function(req, res) {
    API.find({}, function(err, result) {
      if(err){
      res.json(err)
    }else{
        res.json(result)
    }
    })
  },
  new: function(req, res) {
    var api = new API({name: req.params.name});
    api.save(function(err) {
      if(err){
        res.json(err)

      } else {
        res.redirect('/');
      }
    })
  },
  remove : function(req,res){
    API.remove({name: req.params.name}, function(err){
      if(err){
        res.json(err);
      } else {
             res.redirect('/');
          }
    });
  },
  getinfo : function(req,res){
    API.find({name: req.params.name}, function(err, result){
      if(err){
        res.json(err);
      } else {
          res.json(result)
    };
  })
}
}
