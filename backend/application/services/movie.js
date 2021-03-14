const Movie = require('../model/movie');

exports.register = async (movie) => {
    try{
        const newMovie = await Movie.create(movie);
        return newMovie;
    } catch (err) {
        console.log(err);
        const error = new Error('An error ocurred while creating the movie');
        error.statusCode = 500; 
        throw error;
    }
}