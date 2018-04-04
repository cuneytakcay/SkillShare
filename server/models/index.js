const ko = require('nekodb');

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/skillshare";
 
ko.connect({
  client: 'mongodb',
  url: MONGODB_URI
})

  module.exports = {
  User: require("./User"),
  Skill: require("./Skill"),
  Need: require("./Need"),
};
