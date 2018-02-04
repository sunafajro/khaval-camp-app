/**
 * Registrations.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: "objectid"
    },
    data: {
      type: "json"
    },
    createAt: {
      type: "datetime"
    }
  },
  readRegistrations: () => {
    return new Promise((resolve, reject) => {
      Registrations.find()
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  },
  createRegistration: (data) => {
    return new Promise((resolve, reject) => {
      Registrations.create({ data })
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  },
  updateRegistration: (id, data) => {
    return new Promise((resolve, reject) => {
      Registrations.update(id, data)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  },
  deleteRegistration: (id) => {
    return new Promise((resolve, reject) => {
      Registrations.destroy(id)
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  },
  checkRoom: ({ residence, room }) => {
    return new Promise((resolve, reject) => {
      Registrations.findOne({ "data.residence": residence, "data.room": room })
        .then(result => resolve(result))
        .catch(error => reject(error));
      });
  },
  readOccupiedRooms: (id) => {
    return new Promise((resolve, reject) => {
      Registrations.find({ "data.residence": { $in: ["corp20", "zabava"] }})
        .then(result => resolve(result))
        .catch(error => reject(error));
    });
  }
};

