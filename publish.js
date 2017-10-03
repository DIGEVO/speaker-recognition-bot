var zipFolder = require('zip-folder');
var path = require('path');
var fs = require('fs');
var request = require('request');

var rootFolder = path.resolve('.');
var zipPath = path.resolve(rootFolder, '../speaker-recognition-bot.zip');
var kuduApi = 'https://speaker-recognition-bot.scm.azurewebsites.net/api/zip/site/wwwroot';
var userName = '$speaker-recognition-bot';
var password = 'mv2TFbYA1a7k6oBprmS06Ngem0Nghil440H26LxXZnEBJYMpl05Yt5wg6sen';

function uploadZip(callback) {
  fs.createReadStream(zipPath).pipe(request.put(kuduApi, {
    auth: {
      username: userName,
      password: password,
      sendImmediately: true
    },
    headers: {
      "Content-Type": "applicaton/zip"
    }
  }))
  .on('response', function(resp){
    if (resp.statusCode >= 200 && resp.statusCode < 300) {
      fs.unlink(zipPath);
      callback(null);
    } else if (resp.statusCode >= 400) {
      callback(resp);
    }
  })
  .on('error', function(err) {
    callback(err)
  });
}

function publish(callback) {
  zipFolder(rootFolder, zipPath, function(err) {
    if (!err) {
      uploadZip(callback);
    } else {
      callback(err);
    }
  })
}

publish(function(err) {
  if (!err) {
    console.log('speaker-recognition-bot publish');
  } else {
    console.error('failed to publish speaker-recognition-bot', err);
  }
});