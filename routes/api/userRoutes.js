const router = require('express').Router();
const{
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/')

//api/users
router.route('/')
//api/users/:userId
router.route('/');

module.exports = router;