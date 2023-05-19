const {User, Thought } = require('../models/Thoughts');

module.exports = {
    //Gets all the thoughts - works
    async getThoughts(req, res){
        try{
            const allThoughts = await Thought.find();
            res.status(200).json(allThoughts);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Gets the thoughts for one user -
    async myThoughts(req, res){
        try{
            const thoughts = await Thought.findById({_id: req.params.id})
            .populate('reactions');
            res.json(thoughts);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //Creates a thought - 
    async createThought(req, res){
        console.log('Creating a thought');
        try{
            const thought = await Thought.create(req.body);
            console.log(thought);
            console.log(thought._id);
            console.log(thought.username);
            const user = await User.findOneAndUpdate({username: req.body.username}, {
                $push: {thoughts: req.body._id}
            }, {new: true});
          
            console.log(user);
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
            const deleted = await 
            res.status(200).json(deleted);
        } catch(err){
            res.status(500).json(err);
        }
    }


}