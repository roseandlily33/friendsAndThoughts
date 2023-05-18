const {User, Thought} = require('../models/Thoughts');

module.exports = {
    //Gets all the thoughts -
    async getThoughts(req, res){
        try{
            const allThoughts = await 
            res.status(200).json(allThoughts);
        } catch(err){
            res.status(500).json(err);
        }
    },
    //Gets the thoughts for one user -
    async myThoughts(req, res){
        try{
            const thoughts = await 
            res.status(200).json(thoughts);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //Creates a thought - 
    async createThought(req, res){
        try{
            const newThought = await 
            res.status(200).json(newThought);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Updates a thought -
    async updateThought(req, res){
        try{
            const updated = await
            res.status(200).json(updated);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Deletes a thought - 
    async deleteThought(req, res){
        try{
            const deleted = await 
            res.status(200).json(deleted);
        } catch(err){
            res.status(500).json(err);
        }
    },

    //Add a reaction -
    async addReaction(req, res){
        try{
            const reaction = await 
            res.status(200).json(reaction);
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