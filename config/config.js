module.exports = {
  "development": {
    "username": process.env.JAWSDB_USERNAME,
    "password": process.env.JAWSDB_PASSWORD,
    "database": process.env.JAWSDB_DB,
    "host": process.env.LOCAL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
   "use_env_variable":"JAWSDB_URL",
    "dialect": "mysql"
  }
}
