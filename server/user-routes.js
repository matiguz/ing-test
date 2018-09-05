

app.post('/users', function(req, res) {
  
  var userScheme = getUserScheme(req);  

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (_.find(users, userScheme.userSearch)) {
   return res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);

  res.status(201).send({
    id_token: createIdToken(profile),
    access_token: createAccessToken()
  });
});

app.get('/events', function (req, res) {

});

app.post('/event/find', function (req, res) {

});

app.post('/event/add', function (req, res) {

        
});

app.post('/sessions/create', function(req, res) {

  
});
