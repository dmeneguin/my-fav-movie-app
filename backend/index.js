const fastify = require('fastify')({
    logger: true
  })
const sequelize = require('./config/database');

  fastify.register(require('./adapters/routes/movie'))
  
  const start = async () => {

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    
    try {
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()