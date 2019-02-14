var connection = require("./connection");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    // INSERT INTO burgers (burger_name, devoured) VALUES ("New Bacon-Ings Burger", 0)
    insertOne: function(tableInput, burger_name, cb) {
      var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) " + "VALUES ('" + burger_name + "', 0);"
      console.log(queryString);

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },

    // UPDATE burgers SET devoured = 1 WHERE id =  4;
    update: function(table, condition, cb) {
      var queryString = "UPDATE " + table + " SET devoured = 1 WHERE " + condition + ";";

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }

  };
  
  module.exports = orm;