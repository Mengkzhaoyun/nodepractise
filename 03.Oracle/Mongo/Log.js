// Load required packages
var mongoose = require('mongoose');
var mongoose = require('mongoose');
mongoose.connect('mongodb://a4log:a4log12#$@10.65.88.205:27018/a4log');

// Define our beer schema
var A4LogSchema = mongoose.Schema({
  type: String,
  action: String,
  entertime: Date,
  userip: String,
  machineip: String,
  userid: String,
  ssdwdm: Number,
  ipaddress: String,
  httpcode: String,
  url: String,
  ticks: Number,
  postdata: String,
  refurl: String,
});

// Export the Mongoose model
module.exports = mongoose.model('A4Log', A4LogSchema);