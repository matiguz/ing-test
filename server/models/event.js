var mongoose = require('mongoose');
 
var eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    picture: String,
    place: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    days: [{
            type: Date,
            default: Date.now
    }]
    
});
 
var Event = mongoose.model('Event', eventSchema);
 
module.exports = Event;