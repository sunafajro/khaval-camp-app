const sortArrayItems = require("../utils");

module.exports = {
  readElements: (req, res) => {
    Elements.readElements()
      .then(result => {
        const results = sortArrayItems(result, "num", "ASC");
        const filteredData = results.map(item => {
          let newItem = {};
          newItem.id = item.name;
          newItem.label = { ...item.label };
          newItem.items = item.name !== 'roomEl' ? [ ...item.items ] : { ...item.items };
          newItem.type = item.type;
          return newItem;
        });
        return res.status(200).send({ result: filteredData });
      })
      .catch(error => res.status(error.status).send(error.message));
  }
};
