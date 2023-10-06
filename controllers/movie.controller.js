const movieService = require('../services/movie.service');
const Joi = require('@hapi/joi');

// Schema object Movie
const schemaMovie = Joi.object({
    title: Joi.string().min(6).max(255).required(),
    description: Joi.string().min(15).max(255).required(),
    producer: Joi.string().min(6).max(255).required(),
    director: Joi.string().min(6).max(255).required(),
    protagonists: Joi.string().min(6).max(255).required()
});

/**
 * getMovies controller communicates with the service - get all movies
 * @param {Object} req - request
 * @param {Object} res  - response
 * @returns {Object} movies
 */
const getMovies = (async (req, res) => {
    
    const result = await movieService.getMovies({});
    if(!result){
        return res.status(400).json({error: 'No movies yet'});
    }

    res.status(200).json({success: 'All movies', movies: result});
});

/**
 * getMoviesByTitle controller communicates with the service - get all movies with filter
 * @param {Object} req - request movie data
 * @param {Object} res  - response
 * @returns {Object} movies
 */
const getMoviesByTitle = (async (req, res) => {
    try {
        const result = await movieService.getMovies({title: { $regex: new RegExp("^" + req.params.mtl.toLowerCase(), "i") }});
        res.status(200).json({success: 'Get movies by title', movies: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

/**
 * getMovie controller communicates with the service - get only movie with _id
 * @param {Object} req - request movie data
 * @param {Object} res  - response
 * @returns {Object} movie
 */
const getMovie = (async (req, res) => {
    try {
        const result = await movieService.getMovie({_id: req.params.mid});
        res.status(200).json({success: 'Get movie', movie: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

/**
 * createMovie controller communicates with the service - create movie
 * @param {Object} req - request movie data
 * @param {Object} res  - response
 * @returns {Object} movie
 */
const createMovie = (async (req, res) => {
    const { error } = schemaMovie.validate(req.body);
    
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    const isTitleMovieExist = await movieService.getMovie({title: req.body.title});
    if(isTitleMovieExist){
        return res.status(400).json({error: 'Title of the movie already exists, try another'});
    }

    try {
        const result = await movieService.createMovie({
            title: req.body.title,
            description: req.body.description,
            producer: req.body.producer,
            director: req.body.director,
            protagonists: req.body.protagonists
        });
        res.status(200).json({success: 'Saved movie', movie: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

/**
 * updateMovie controller communicates with the service - update movie with _id
 * @param {Object} req - request movie data
 * @param {Object} res  - response
 * @returns {Object} movie
 */
const updateMovie = (async (req, res) => {
    const { error } = schemaMovie.validate(req.body);
    
    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    try {
        const result = await movieService.updateMovie({_id: req.params.mid},
        {
            title: req.body.title,
            description: req.body.description,
            producer: req.body.producer,
            director: req.body.director,
            protagonists: req.body.protagonists
        });
        res.status(200).json({success: 'Update movie', movie: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

/**
 * deleteMovie controller communicates with the service - delete movie with _id
 * @param {Object} req - request movie data
 * @param {Object} res  - response
 * @returns {Object} movie
 */
const deleteMovie = (async (req, res) => {
    try {
        const result = await movieService.deleteMovie({_id: req.params.mid});
        res.status(200).json({success: 'Delete movie', movie: result});
    }
    catch(error){
        res.status(400).json({error});
    }
});

module.exports = { getMovies, getMoviesByTitle, getMovie, createMovie, updateMovie, deleteMovie }