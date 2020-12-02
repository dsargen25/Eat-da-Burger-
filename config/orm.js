const connection = require("../config/connection.js");

const orm = {

  selectAll: function(callBack) {
    connection.query('SELECT * FROM burgers',
     function(err, result) {
        if (err) throw err;
        callBack(result);
    });
  },

  insertOne: function(burger_name, callBack) {
    connection.query('INSERT INTO burgers SET ?',{
        burger_name: burger_name,
        devoured: false, },
    function(err, result) {
        if (err) throw err;
        callBack(result);
    });
  },

  updateOne: function(id, callBack) {
    connection.query('UPDATE burgers SET devoured = ? WHERE id = ?',
      [{devoured: true}, {id: id}],
      function(err, result) {
        if (err) throw err;
        callBack(result);
      });
  }
};

module.exports = orm;