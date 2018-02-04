module.exports = {
  getState: (req, res) => {
    //Article.getArticles()
      //.then(articles => {
        return res.send({
          //data: articles,
          lang: 'ru',
          loggedIn: req.session.loggedIn ? req.session.loggedIn : false,
          //user: {
          //  userId: req.session.userId ? req.session.userId : 0,
          //  username: req.session.userName ? req.session.userName : "guest"
          //}
        });
      //})
      //.catch(error => {
        //return res.status(error.status).send(error.message);
      //});
  }
};
