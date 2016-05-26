const readline = require('readline');
var fs = require('fs');
var path = require('path')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function GetTempFileName(sName) {
  var time = Date.now();
  return sName + '_' + time + '.txt';
}

rl.question('Please input the folder , c:\\dom \n', (dir) => {
  var sDirName = path.dirname(dir);
  var sFolderName = sDirName;
  if (sDirName && sDirName.length > 0) {
    var aFolders = sDirName.split(path.sep);
    sFolderName = aFolders[aFolders.length - 1];
  }
  fs.readdir(dir, function (err, files) {
    files.forEach(function (filename, fileindex) {
      console.log('FILE:', filename);
    });
    var sTempFileName = GetTempFileName(sFolderName);
    fs.writeFile(sTempFileName, files.join('\r\n'), (err) => {
      if (err) throw err;
      console.log('It\'s saved : ', sTempFileName);
    });
    rl.close();
  });
});