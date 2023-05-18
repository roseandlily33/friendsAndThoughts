const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema ({
    thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},
    createdAt: {type: Date, default: Date.now()},
    //Username, type: string, required: true, do I need to pull this in?
    //Reactions, [reactionSchema] 
    
}, {
    toJSON: {
        virtuals: true,
        //getters: true?
    },
    id: false
})

//Created at needs a getter method to format the time