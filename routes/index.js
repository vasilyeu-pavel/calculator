var checkAuth = require('../middleware/checkAuth');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);

  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);

  app.get('/calculator', checkAuth, require('./calculator').get);

  app.get('/submit', require('./test').get)

  app.post('/submit', require('./test').post)

};