import express from 'express'
import moviesController from '../controllers/moviesController.js'

const Router = express.Router()

Router.route('/movies')
  .get(moviesController.getAllMovies)
  .post(moviesController.createMovie)

Router.route('/movies/:id')
  .get(moviesController.getMovie)
  .put(moviesController.updateMovie)
  .delete(moviesController.deleteMovie)

Router.route('/reload')
  .get(moviesController.testReload)

export default Router
