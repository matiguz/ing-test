const mongoose = require('mongoose');
let Author = require('../models/author');

module.exports = {
    getAll: (req,res,next) => {
        Author.find({}, function(err,users){
            if (err)
                res.send(err)
            else if (!users)
                res.send(404)
            else {
                let eventMap = {};
                users.forEach(function(user){
                    //let a = Author.find({"_id": { $in: event.author }  }).name;
                    //console.log(a);
                    user.author = "asd";
                    eventMap[user._id] = user;
                })
                res.send(JSON.stringify(users));
            }
        });
    },

    checkUser: (req,res,next) => {

        /***
        ***BUSCAR USER
        ***/
        let { user, password} = req.body;
        // console.log("usu :", user);
        // console.log("pass :", password);
       // Event.findById(id);
       Author.findById(user, function (err, u) {
            if (err)
                res.send(err)
            else if (!u)
                res.send(404)
            else {
                res.send(JSON.stringify(u));
            }
       });

    }
}