const Movie = require('../models/Movie.model');

const getMovies = (async (query) => {
    const movies = await Movie.find(query).sort({date: 'desc'});
    return movies;
});

const getMovie = (async (query) => {
    const movie = await Movie.findOne(query);
    return movie;
});

const createMovie = (async (query) => {
    try {
        const movie = await Movie.create(query);
        return movie;
    }
    catch(error){
        return error;
    }
});

const updateMovie = (async (query, update) => {
    try {
        const movie = await Movie.findOneAndUpdate(query, update, {returnDocument: 'after'});
        return movie;
    }
    catch(error){
        return error;
    }
});

const deleteMovie = (async (query) => {
    try {
        const movie = await Movie.findOneAndDelete(query, {returnDocument: 'after'});
        return movie;
    }
    catch(error){
        return error;
    }
});

module.exports = { getMovies, getMovie, createMovie, updateMovie, deleteMovie }