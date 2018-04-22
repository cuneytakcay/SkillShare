const ko = require('nekodb');

const User = ko.Model('User', {
  username: ko.String,
  firstName: ko.String,
  lastName: ko.String,
  email: ko.String,
  hash: ko.String,
  img: ko.String,
  $$indexes: {
    username: {
      unique: true,
    },
    email: {
      unique: true,
    },
  },
});

module.exports = User;
