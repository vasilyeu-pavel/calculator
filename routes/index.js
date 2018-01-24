var checkAuth = require('../middleware/checkAuth');

module.exports = function(app) {

  app.get('/', require('./frontpage').get);

  app.get('/login', require('./login').get);

  app.post('/login', require('./login').post);

  app.post('/logout', require('./logout').post);

  app.get('/calculator', checkAuth, require('./calculator').get);

  app.get('/dataBlanks', require('./data/blanks').get)

  app.post('/dataBlanks', require('./data/blanks').post)

};