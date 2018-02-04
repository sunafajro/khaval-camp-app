module.exports = {
  getState: (req, res) => {
    return res.send({
      lang: "ru",
      loggedIn: req.session.loggedIn ? req.session.loggedIn : false
      //user: {
      //  userId: req.session.userId ? req.session.userId : 0,
      //  username: req.session.userName ? req.session.userName : "guest"
      //}
    });
  }
};
