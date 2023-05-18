const { User } = require('../models/User');
module.exports = {
    //Get all users - 
    async getUsers(req, res){
        try{
            const users = await User.find();
            res.status(200).json(users);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Gets a user by a single id -
    async getOneUser(req, res){
        try{
            const singleUser = await User.findOne({_id: req.params.userId})
            .select('-__v');
            if(!singleUser){
                res.status(404).json({message: 'No user found'});
            }
            res.status(200).json(singleUser);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Creates a user - 
    async createUser(req, res){
        try{
            const userData = await User.create(req.body);
            res.status(200).json(userData);
        } catch (err){
            res.status(500).json(err);
        }
    },

    //Updates a user - 
    async updateUser(req, res){
        try{
            const updated = await User.findOneAndUpdate()
            res.status(200).json(updated);
        } catch(err){
            res.status(500).json(err)
        }
    },

    //Deletes a user - 
    async deleteUser(req, res){
        try{
            const deletedUser = await User.findOneByIdAndDelete()
            res.status(200).json(deletedUser);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Adds a friend -
    async addFriend(req, res){
        try{
            const newFriend = await User.create();
            res.status(200).json(newFriend);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Deletes a friend -
    async deleteFriend(req, res){
        try{
            const deleteFriend = await User.
            res.status(200).json(deleteFriend);
        } catch(err){
            res.status(500).json(err);
        }
    }






}
