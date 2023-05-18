const router = require('express').Router();

const{
    getThoughts,
    myThoughts,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtContoller');

//api/thoughts
router.route('/').get(getThoughts).post(createThought);

//api/thoughts/:id
router.route('/:id').get(myThoughts).put(updateThought).delete(deleteThought);

//api/thoughts/:thoughtId/reaction
router.route('/:id/reaction').post(addReaction).delete(deleteReaction);

module.exports = router;
