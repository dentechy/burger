
const connection = require('./connection.js');

function questionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();

}

function sqlobject(sq) {
  var arr = [];

  for (var key in sq) {
    arr.push(key + "=" + sq[key]);
  }

  return arr.toString();
}

const orm = {
  selectAll: function(tableInput, cb) {
    var querys = "SELECT * FROM " + tableInput + ";";
    connection.query(querys, function(err, result) {
      if (err) throw err;

      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var querys = "INSERT INTO " + table;

    querys += " (";
    querys += cols.toString();
    querys += ") ";
    querys += "VALUES (";
    querys += questionMarks(vals.length);
    querys += ") ";

    console.log(querys);

    connection.query(querys, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  updateOne: function(table, burgerVals, state, cb) {
    var querys = "UPDATE " + table;
    querys += " SET ";
    querys += sqlobject(burgerVals);
    querys += " WHERE ";
    querys += state;

    console.log(querys);
    connection.query(querys, function(err,result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;



