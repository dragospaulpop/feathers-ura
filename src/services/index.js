const users = require('./users/users.service.js');
const custom = require('./custom/custom.service.js');
const items = require('./items/items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(custom);
  app.configure(items);
};
