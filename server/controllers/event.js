const Event = require('./../models/event')

const mongoose = require('mongoose');
let User = require('../models/user');
let cUser = require('./user')

module.exports = {
    getAll: (req,res,next) => {
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
            })
     //   res.send(JSON.stringify(req))
    /*    */
    },
    addEvent: (req,res,next) => {
        
        /***
        ***CREAR EVENTO
        ***/
        
        let token = req.headers.authorization;
        let resToken = cUser.verifyAccessToken(token);
        //console.log(req)
        if(resToken.username = "pito"){
            console.log("vino pal pito");
            let title = req.body.title;
            let description = req.body.description;
            let picture = req.body.url_picture;
            let place = req.body.place;
            let days = req.body.days;
            
            let event = new Event({
                _id: new mongoose.Types.ObjectId(),
                title: title,
                description: description,
                picture: picture,
                place: place,
                author: "5b8ac8fe4417db0e97ccf2d8",
                days: Date(days)
                
            });

            event.save(function(err){
                if (err) throw console.log(err);
            })
            res.status(201).send("Alta correcta");
        }
    },

    findEvent: (req,res,next) => {

        /***
        ***BUSCAR EVENTO
        ***/
      let {id} = req.body;
      console.log("id-",id)
      // Event.findById(id);
      Event.findById(id, function (err, event) {
            if (err)
                res.send(err)
            else if (!event){
              console.log("puto el que lee")
              res.send(404)
            }
            else {
                res.send(JSON.stringify(event));
            }
       });

    }
}