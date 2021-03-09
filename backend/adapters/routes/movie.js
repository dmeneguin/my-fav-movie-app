const validation = require('./validations/movie');
const controller = require('../controllers/movie');

async function routes (fastify, options) {
    
    fastify.post('/movie', validation, async (request, reply) => {
        return controller.post(request, reply);
    })

    fastify.get('/movie', async (request, reply) => {
        return controller.get(request, reply);
    })

    fastify.get('/movie/:id', async (request, reply) => {
        return controller.getById(request.params.id, request, reply);
    })

    fastify.put('/movie/:id', async (request, reply) => {
        return controller.put(request.params.id, request, reply);
    })

    fastify.patch('/movie/:id', async (request, reply) => {
        return controller.patch(request.params.id, request, reply);
    })

    fastify.delete('/movie/:id', async (request, reply) => {
        return controller.delete(request.params.id, request, reply);
    })
}

module.exports = routes