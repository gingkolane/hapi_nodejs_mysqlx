'use strict';

const config = require('./config')
const hapi = require ('@hapi/hapi')
const mysqlx = require('@mysql/xdevapi')

const init = async () => {

  const server = hapi.server(config.app)

  server.route({
      method: 'GET',
      path: '/',
      handler: async () => {

        // create a session using propertities defined in /config.js
        const session = await mysqlx.getSession(config.connection)

        // get schema name of default schema
        const schemaName = await session.getDefaultSchema().getName()

        console.log("host:", session.inspect(),"schema from session:", schemaName);

        return { 
            host: session.inspect(), 
            schemaFromSession: schemaName 
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