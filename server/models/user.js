var mongoose = require('mongoose');
 
var userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    password:String
});
 
var User = mongoose.model('User', userSchema);
 
module.exports = User;