const moment = require("moment");
const Utils = require("../utils");
/**
 * RegistrationsController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  readRegistrations: (req, res) => {
    Registrations.readRegistrations()
      .then(result => {
        const results = Utils.sortArrayItems(result, "createdAt", "DESC");
        if (req.session.loggedIn) {
          return res.status(200).send({ result: results });
        } else {
          const filteredData = results.map((item, i) => {
            let newItem = {};
            newItem.key = item.id;
            newItem.rowNum = i + 1;
            newItem.name = item.data.lastName + " " + item.data.firstName;
            (newItem.age = moment().diff(item.data.birthdate, "years")),
              (newItem.city = item.data.city);
            newItem.duration = item.data.duration;
            newItem.date = moment(item.createdAt).format("DD.MM.YYYY");
            return newItem;
          });
          return res.status(200).send({ result: filteredData });
        }
      })
      .catch(error => res.status(500).send(error));
  },
  createRegistration: (req, res) => {
    const { data } = req.body;
    Object.keys(data).forEach(item => {
      if (!data[item]) {
        if (
          item !== "room" &&
          item !== "job" &&
          item !== "chuvasName" &&
          item !== "social"
        ) {
          return res
            .status(400)
            .send({ message: "Форма заполнена не полностью!" });
        }
      }
    });
    if (data.residence === "zabava" || data.residence === "corp20") {
      if (data.room) {
        Registrations.checkRoom({ residence: data.residence, room: data.room })
          .then(result => {
            if (result) {
              return res.status(409).send({ message: "Это место/комната уже занято!" });
            } else {
              Registrations.createRegistration(data)
                .then(result => {
                  MailerService
                  .send({
                    to: "sunafajro@gmail.com",
                    text: Utils.prepareEmailText(data)
                  })
                  .then(result => {;
                  return res.status(200).send({ result });
                  })
                  .catch(error => {
                    return res.status(500).send(error.message)
                  });
                })
                .catch(error => {
                  return res.status(500).send({ message: error.message })
                });
            }
          })
          .catch(error => {
            return res.status(500).send({ message: error.message })
          });
      } else {
        return res
          .status(400)
          .send({ message: "Поле комната/место должно быть заполнено!" });
      }
    } else {
      Registrations.createRegistration(data)
        .then(result => {
          MailerService
          .send({
            to: "sunafajro@gmail.com",
            text: Utils.prepareEmailText(data)
          })
          .then(result => {;
          return res.status(200).send({ result });
          })
          .catch(error => {
            return res.status(500).send(error.message)
          });
        })
        .catch(error => {
          return res.status(500).send({ message: error.message })
        });
    }
  },
  updateRegistration: (req, res) => {
    if (req.session.loggedIn) {
      const { id, data } = req.body;
      Registrations.updateRegistration(id, data)
        .then(result => {
          return res.status(200).send({ result });
        })
        .catch(error => {
          return res.status(500).send({ message: error.message })
        });
    } else {
      return res.status(401).send("User is not authorized for this action");
    }
  },
  deleteRegistration: (req, res) => {
    if (req.session.loggedIn) {
      const { id } = req.body;
      Registrations.deleteRegistration(id)
        .then(result => {
          return res.status(200).send({ result });
        })
        .catch(error => {
          return res.status(500).send({ message: error.message })
        });
    } else {
      return res.status(401).send("User is not authorized for this action");
    }
  },
  readOccupiedRooms: (req, res) => {
    Registrations.readOccupiedRooms()
      .then(rooms => {
        const filteredData = {
          "corp20": [],
          "zabava": [],
        }
        rooms.forEach(item => {
          if(item.data.residence === "corp20") {
            filteredData.corp20.push(item.data.room);
          } else if(item.data.residence === "zabava") {
            filteredData.zabava.push(item.data.room);
          }
        });
        return res.status(200).send({ result: filteredData });
      })
      .catch(error => {
        return res.status(500).send({ message: error.message })
      });
  },
  viewReport: (req, res) => {
    Registrations.readRegistrations()
    .then(result => {
      const results = Utils.sortArrayItems(result, "createdAt", "DESC");
      if (req.session.loggedIn) {
        return res.status(200).send(Utils.prepareRegistrationList(results));
      } else {
        return res.status(401).send({ message: 'Not authorized!' });
      }
    })
    .catch(error => res.status(500).send(error));
}
};
