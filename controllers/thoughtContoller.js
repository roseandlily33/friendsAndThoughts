const { User, Thought } = require('../models');

module.exports = {
    //Gets all the thoughts - works
    async getThoughts(req, res){
        try{
            const allThoughts = await Thought.find().select(['-__v', '-createdAt']);
            res.status(200).json(allThoughts);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Gets the thoughts for one user - works
    async myThoughts(req, res){
        try{
            const thoughts = await Thought.findById({_id: req.params.id})
            .populate('reactions').select(['-__v', '-createdAt']);
            res.json(thoughts);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //Creates a thought - works
    async createThought(req, res){
        try{
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate({_id: req.body.userId}, {
                $push: {thoughts: thought._id}
            }, {new: true});
            if(!user){
                res.status(404).json({message: 'No thought created'});
            }
            res.json('Created the post 🎉');
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Updates a thought -
    async updateThought(req, res){
        try{
            const updated = await
            res.json(updated);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Deletes a thought - 
    async deleteThought(req, res){
        try{
            const deleted = await 
            res.json(deleted);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Add a reaction -
    async addReaction(req, res){
        console.log('Adding a reaction');
        try{
            const reaction = await Thought.findOneAndUpdate({_id:req.params.thoughtId}, {$addToSet: {reactions: req.body}}, {new: true});
            console.log(reaction);
            res.json(reaction);
        } catch(err){
            res.status(500).json(err);
        }
    },


    //Delete a reaction - 
    async deleteReaction(req, res){
        try{
            const deleted = await Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$pull: {reactions: {reactionId: req.body.reactionId}}})
            res.status(200).json(deleted);
        } catch(err){
            res.status(500).json(err);
        }
    }


}