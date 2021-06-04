// Initializes the `custom` service on path `/custom`
const { Custom } = require('./custom.class');
const hooks = require('./custom.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/custom', new Custom(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('custom');

  service.hooks(hooks);
};
