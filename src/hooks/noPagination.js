module.exports = function (options = {}) {
  return context => { 
    if ('$faralimitaboss' in context.params.query) {
      delete context.params.query.$faralimitaboss
      context.params.paginate = false
    }     

    return context;
  }
}
