const Event = require('./../models/event')

const mongoose = require('mongoose');
let Author = require('./../models/author');

module.exports = {
    getAll: (req,res,next) => {
    //    console.log("aca tambien")
        Event.find({}, function(err,events){
            if (err)
                res.send(err)
            else if (!events)
                res.send(404)
            else {
                let eventMap = {};
                events.forEach(function(event){
                    //let a = Author.find({"_id": { $in: event.author }  }).name;
                    //console.log(a);
                    event.author = "asd";
                    eventMap[event._id] = event;
                })
                res.send(JSON.stringify(events));
            }
        });
    },
    addEvent: (req,res,next) => {

        /***
        ***CREAR EVENTO
        ***/
       let title = req.body.title;
       let description = req.body.description;
       let picture = req.body.picture;
       let place = req.body.place;
       //AUTHORlet  = req.body.title;
       let days = req.body.days;
       
        let event = new Event({
            _id: new mongoose.Types.ObjectId(),
            title: title,
            description: description,
            picture: picture,
            place: place,
            author: "5b8ac8fe4417db0e97ccf2d8",
            days: [days]
            
        });

        event.save(function(err){
            if (err) throw console.log(err);
            console.log("primer evento, sabelo pelo")
        })

    },

    findEvent: (req,res,next) => {

        /***
        ***BUSCAR EVENTO
        ***/
        let {id} = req.body;
       // Event.findById(id);
       Event.findById(id, function (err, event) {
            if (err)
                res.send(err)
            else if (!event)
                res.send(404)
            else {
                res.send(JSON.stringify(event));
            }
       });

    }
}