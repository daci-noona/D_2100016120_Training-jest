const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const filterOddNumber = (arr) => {
  return arr.filter((num) => num % 2 !== 0).toString();
};

const epochDateToUTC = (epochDate) => {
  const d = new Date(0);
  d.setUTCSeconds(epochDate);
  return d.toUTCString();
};

module.exports = {
  capitalize,
  filterOddNumber,
  epochDateToUTC,
};
