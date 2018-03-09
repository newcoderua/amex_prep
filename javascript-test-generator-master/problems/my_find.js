// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

function myFind (array, callback) {
  array.forEach((el) => {
    if (callback(el)) return true;
  });
};
