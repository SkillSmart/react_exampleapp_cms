const Hapi = require('hapi')


const startUp = async () => {

    const server = new Hapi.Server({
        host: 'localhost',
        port: 5000
    });

    // Register Plugins

    // Start the server
    await server.start()
    console.log(`Server successfully started at ${server.info.uri}`);
}

startUp();
