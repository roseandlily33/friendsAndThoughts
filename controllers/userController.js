const { User, Thought } = require('../models');

module.exports = {
    
    //Get all users - works
    async getUsers(req, res){
        try{
            const users = await User.find().sort({username: 1});
            res.json(users);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Gets a user by a single id - works
    async getOneUser(req, res){
        try{
            const singleUser = await User.findOne({_id: req.params.id});
            if(!singleUser){
                res.json({message: 'No user found'});
            }
            res.json(singleUser);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Creates a user - works
    async createUser(req, res){
        try{
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err){
            res.status(500).json(err);
        }
    },

    //Updates a user - works
    async updateUser(req, res){
        try{
            const updated = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
            if(!updated){
                res.json({message: 'No user found'});
            }
            res.json(updated);
        } catch(err){
            res.status(500).json(err)
        }
    },

    //Deletes a user - works
    async deleteUser(req, res){
        try{
            const deletedUser = await User.findOneAndDelete({_id: req.params.id})
            res.json(deletedUser);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Adds a friend - work
    async addFriend(req, res){
        try{
            const newFriend = await User.findOneAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}});
            res.status(200).json(newFriend);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Deletes a friend - works
    async deleteFriend(req, res){
        console.log('Deleting friend');
        try{
            const deleteFriend = await User.findOneAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}});
            res.json(deleteFriend);
        } catch(err){
            res.status(500).json(err);
        }
    }
}
