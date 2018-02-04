module.exports = {
  login: (req, res) => {
    User.getUserByName(req.body.LoginForm.username)
      .then(user => {
        if (user && user.password === req.body.LoginForm.password) {
          req.session.loggedIn = true;
          req.session.userId = user.id;
          req.session.userName = user.username;
          return res.send({
            loggedIn: req.session.loggedIn ? req.session.loggedIn : false,
            user: {
              userId: req.session.userId ? req.session.userId : 0,
              username: req.session.userName ? req.session.userName : "guest"
            }
          });
        } else {
          return res.status(400).send("Неправильный логин или пароль");
        }
      })
      .catch(error => {
        return res.status(error.status).send(error.message);
      });
  },
  logout: (req, res) => {
    req.session.loggedIn = false;
    req.session.userId = 0;
    req.session.userName = "guest";
    return res.send({
      loggedIn: req.session.loggedIn ? req.session.loggedIn : false,
      user: {
        userId: req.session.userId ? req.session.userId : 0,
        username: req.session.userName ? req.session.userName : "guest"
      }
    });
  }
};
