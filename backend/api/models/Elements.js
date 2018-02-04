module.exports = {
  attributes: {
    id: {
      type: "objectid"
    },
    num: {
      type: "integer"
    },
    name: {
      type: "string"
    },
    label: {
      type: "json"
    },
    items: {
      type: "json"
    },
    type: {
      type: "string"
    }
  },
  readElements: () => {
    return new Promise((resolve, reject) => {
      Elements.find()
        .then(result => {
          return resolve(result);
        })
        .catch(error => {
          return reject(error);
        });
    });
  }
};
