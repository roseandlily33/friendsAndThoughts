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

//api/user
router.route('/').get(getUsers).post(createUser);

//api/user/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

//api/user/:id/friend/:id
router.route('/:id/friend/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;