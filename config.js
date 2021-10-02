var config = {};

//hapi server's config 
config.app = {
  host: 'localhost',
  port: 3000
}

//Database connection configuration
config.connection = {
  host:'localhost',
  port: 33060,
  user: 'dbusername',
  password:'dbpassword', 
  schema: 'defaultschema'  //default database
};

config.connectionUrl = 'mysqlx://dbusername:dbpassword!@localhost:33060/defaultschema'

config.connectionPool = { 
  pooling: { 
    enabled: true, 
    maxIdleTime:500, 
    maxSize:25, 
    queueTimeout:500
  }
}

module.exports = config;