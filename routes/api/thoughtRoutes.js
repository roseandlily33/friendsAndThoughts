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

//api/users
router.route('/')
//api/users/:userId
router.route('/');

module.exports = router;
