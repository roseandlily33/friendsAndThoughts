//const { User } = require('../models/User');
module.exports = {
    async getUsers(req, res){
        try{
            const users = await User.find();
            res.status(200).json(user);
        } catch(err){
            res.status(500).json(err);
        }
    }
}
