'use strict';

const config = require('./config')
const hapi = require ('@hapi/hapi')
const mysqlx = require('@mysql/xdevapi')

const init = async () => {

  const server = hapi.server(config.app)
  //create a connection pool
  const client = mysqlx.getClient(config.connectionUrl, config.connectionPool)

  server.route({
      method: 'GET',
      path: '/',
      handler: async () => {

        // get a session from the connection pool using client
        const session = await client.getSession()

        // get schema name of default schema
        const schemaName = await session.getDefaultSchema().getName()

        console.log("host:", session.inspect(),"schema by client", schemaName);

        return { 
            host: session.inspect(), 
            schemaFromClient: schemaName 
        } 

      }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
  };

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();