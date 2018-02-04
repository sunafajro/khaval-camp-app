/**
 * sorts a array by key
 * @param {Array} items
 * @param {string} key
 * @param {string} direction
 */
const sortArrayItems = (items, key, direction) => {
  if (direction === "ASC") {
    return items.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  } else {
    return items.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
  }
};

module.exports = sortArrayItems;