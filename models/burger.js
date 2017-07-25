const orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    orm.insertOne("burgers", [
        "burger_name", "devoured"
    ], [
    name, false
    ], cb);
  },
  updateOne: function(id, cb) {
    var state = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true
    }, state, cb);
  }
};

module.exports = burger;

