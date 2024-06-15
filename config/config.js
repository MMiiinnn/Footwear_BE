require('dotenv').config();
module.exports = {
  local: {
    username: 'root',
    password: 'root',
    database: 'footwear',
    host: '127.0.0.1',
    dialect: 'mysql'
    },
  development: {
    username: 'root',
    password: 'root',
    database: 'footwear',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
