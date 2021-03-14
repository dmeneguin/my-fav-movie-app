const movieService = require('../../application/services/movie');

exports.post = async (request, reply) => {
    return await movieService.register(request.body);
}

exports.get = (request, reply) => {
    console.log('--------------');
    console.log('get movie');
    console.log('--------------');
    return { message: 'get movies' };
}

exports.getById = (id, request, reply) => {
    console.log('--------------');
    console.log('get movie by id ' + id);
    console.log('--------------');
    return { message: String('get movie by id ' + id) };
}

exports.put = (id, request, reply) => {
    console.log('--------------');
    console.log('edit movie');
    console.log(request.body);
    console.log('--------------');
    return { message: String('edit movie ' + id) };
}

exports.patch = (id, request, reply) => {
    console.log('--------------');
    console.log('edit movie');
    console.log(request.body);
    console.log('--------------');
    return { message: String('edit movie ' + id) };
}

exports.delete = (id, request, reply) => {
    console.log('--------------');
    console.log('delete movie ' + id);
    console.log('--------------');
    return { message: String('delete movie ' + id) };
}