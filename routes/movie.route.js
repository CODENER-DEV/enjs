const router = require('express').Router();
const  { getMovies, getMovie, createMovie, updateMovie, deleteMovie, getMoviesByTitle } = require('../controllers/movie.controller');
const verifyToken = require('../utils/verifyData');

// Routes of Movies
router.get('/all', verifyToken, getMovies);

router.get('/get/:mid', verifyToken, getMovie);

router.get('/search/:mtl', verifyToken, getMoviesByTitle);

router.post('/create', verifyToken, createMovie);

router.put('/update/:mid', verifyToken, updateMovie);

router.delete('/delete/:mid', verifyToken, deleteMovie);

module.exports = router;