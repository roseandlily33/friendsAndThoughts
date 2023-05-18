const router = require('express').Router();
const{
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

//api/users
router.route('/').get(getUsers).post(createUser);

//api/users/:userId
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

//api/users/friends/:id
router.route('/friend/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;