var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');
var A4Log = require('./Mongo/Log.js');

oracledb.getConnection(
  {
    user: dbConfig.user,
    password: dbConfig.password,
    connectString: dbConfig.connectString
  },
  function (err, connection) {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      "select *" +
      "from a4log.a4_sys_acslog partition(P201501)" +
      "where entertime > to_date(:startdate, 'yyyy.MM.dd')" +
      " and entertime < to_date(:enddate, 'yyyy.MM.dd')",
      ["2015.01.08", "2015.01.09"],
      { resultSet: true },
      function (err, result) {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        fetchOneRowFromRS(connection, result.resultSet);
      });
  });

function doRelease(connection) {
  connection.release(
    function (err) {
      if (err) {
        console.error(err.message);
      }
    });
}

var pCount = 0;
var pIndex = 0;
var pFlag = false;
function fetchOneRowFromRS(connection, resultSet) {
  resultSet.getRows( // get one row
    1000,
    function (err, rows) {
      if (err) {
        console.error(err.message);
        doRelease(connection);
        return;  // close the result set and release the connection
      } else if (!rows || rows.length == 0) { // no rows, or no more rows
        doRelease(connection);
        console.log("GetMyJob Done");
        return;           // close the result set and release the connection
      } else {
        var instances = [];
        for (var index = 0; index < rows.length; index++) {
          var row = rows[index];
          var instance = {
            type: row[1],
            action: row[2],
            entertime: row[3],
            userip: row[4],
            machineip: row[5],
            userid: row[6],
            ssdwdm: row[7],
            ipaddress: row[8],
            httpcode: row[9],
            url: row[10],
            ticks: row[11],
            postdata: row[12],
            refurl: row[13],
          };
          instances.push(instance);
        }
        pIndex--;
        A4Log.collection.insert(instances, function (errex, doc) {          
          if (errex)
            console.error(errex.message);
          else {
            pCount += instances.length;
            console.log("%d rows", pCount);
          }
        });
        fetchOneRowFromRS(connection, resultSet);  // get next row
      }
    });
}

