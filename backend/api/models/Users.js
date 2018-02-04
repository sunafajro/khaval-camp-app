/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'string'
    },
    username: {
      type: "string"
    },
    password: {
      type: "string"
    }
  },
  getUserByName: username => {
    return new Promise((resolve, reject) => {
      User.findOne({ where: { username } })
        .then(user => {
          return resolve(user);
        })
        .catch(error => {
          return reject(error);
        });
    });
  }
};

