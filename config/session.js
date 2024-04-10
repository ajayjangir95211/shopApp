const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore(URI) {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    uri: URI,
    databaseName: 'online-shop',
    collection: 'sessions'
  });

  return store;
}

function createSessionConfig(URI) {
  return {
    secret: 'super-secret',
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(URI),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000
    }
  };
}

module.exports = createSessionConfig;