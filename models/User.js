const {Schema, model} = require('mongoose');
import {isEmail} from 'validator';

const userSchema = new Schema ({
    userName: {type: String, required: true, unique: true, trim: true },
    email: {type: String, required: true, unique: true, validate:[isEmail, 'Enter a valid Email']},
    thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    toJSON: {
        virtuals: true
    }, 
    id: false
});

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;


