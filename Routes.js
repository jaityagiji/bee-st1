const express = require('express')
const Router = express.Router();

const moviesController = require('../Controller/moviesController')
const reviewsController = require('../Controller/reviewsController')


Router.post('/movie/create', moviesController.createMovie);
Router.get('/movies/all', moviesController.getAll);
Router.get('/movies/:id', moviesController.getMovie);
Router.put('/movies/:id', moviesController.updateMovie);
Router.delete('/movies/:id', moviesController.deleteMovie);

Router.post('/review/create', reviewsController.createReview);
Router.get('/reviews/all', reviewsController.getAll);
Router.get('/review/:id', reviewsController.getReview);
Router.put('/review/:id', reviewsController.updateReview);
Router.delete('/review/:id', reviewsController.deleteReview);

module.exports = Router;

