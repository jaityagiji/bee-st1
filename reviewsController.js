const reviews = require("../model/reviewSchema");

const createReview = async (req,res) => {
        const review = req.body;
        if(!reqBody){
            return res.status(400).json({message: "Request body cannot be empty"});
        }
        console.log(reqBody);
        const newReview = new reviews(req.body);
        try{
            await newReview.save();
        }
        catch(err){
            console.log(err);
            return res.status(401).json("Internal Server Error");
        }
        res.status(201).json({
            message: 'Created',
            review: newReview
        });
}

const getAll = async (req,res) => {
    try{
        const reviews = await reviews.find();
        res.json(reviews);
    }catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const getReview = async (req,res) => {
    const id  = Number(req.params.id);

  try {
    const review = await reviews.findById(id);

    if (!review) {
      return res.status(404).json({ error: 'review not found' });
    }

    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateReview = async (req,res) =>{
    const id = Number(req.params.id);
    const updatedReview = req.body;
    try {
        const updatedReview = await reviews.findByIdAndUpdate(id);

        if (!updatedReview) {
            return res.status(404).json({ error: 'review not found' });
        }
        res.json(updatedReview);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:  'Internal Server Error'});
    }
}

const deleteReview = async (req,res) =>{
    const id = Number(req.params.id);
    const deletedReview = req.body;
    try {
        const deletedReview = await reviews.findByIdAndRemove(id);

        if (!deletedReview) {
            return res.status(404).json({ error: 'review not found' });
        }
        res.json({message: 'Movie deleted successfully.',deletedReview});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:  'Internal Server Error'});
    }
}

module.exports = {createReview, getAll, getReview, updateReview, deleteReview};