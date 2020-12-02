const orm = require('../config/orm.js');

const burger = {

  selectAll: function(callBack){
    orm.selectAll(function(res){
      callBack(res);
    });
  },

  insertOne: function(burger_name, callBack){
    orm.insertOne(burger_name, function(res){
      callBack(res);
    });
  },

  updateOne: function(burger_id, callBack){
    orm.updateOne(burger_id, function(res){
      callBack(res);
    });
  }

};

module.exports = burger;