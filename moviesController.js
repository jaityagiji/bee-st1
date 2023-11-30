const movie = require("../model/movieSchema");

const createMovie = async (req,res) => {
        const movie = req.body;
        if(!reqBody){
            return res.status(400).json({message: "Request body cannot be empty"});
        }
        console.log(reqBody);
        const newMovie = new movie(req.body);
        try{
            await newMovie.save();
        }
        catch(err){
            console.log(err);
            return res.status(401).json("Internal Server Error");
        }
        res.status(201).json({
            message: 'Created',
            movie: newMovie
        });
}

const getAll = async (req,res) => {
    try{
        const movies = await movieovie.find();
        res.json(movies);
    }catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const getMovie = async (req,res) => {
    const id  = Number(req.params.id);

  try {
    const Movie = await movie.findById(id);

    if (!Movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.status(200).json(Movie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateMovie = async (req,res) =>{
    const id = Number(req.params.id);
    const updatedMovie = req.body;
    try {
        const updatedMovie = await movie.findByIdAndUpdate(id);

        if (!updatedMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(updatedMovie);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:  'Internal Server Error'});
    }
}

const deleteMovie = async (req,res) =>{
    const id = Number(req.params.id);
    const deletedMovie = req.body;
    try {
        const deletedMovie = await movie.findByIdAndRemove(id);

        if (!deletedMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json({message: 'Movie deleted successfully.',deletedMovie});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:  'Internal Server Error'});
    }
}

module.exports = {createMovie, getAll, getMovie, updateMovie, deleteMovie};