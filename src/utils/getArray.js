export const getArray = obj => {
  let arr = [];

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      arr.push(obj[key]);
    }
  }

  return arr;
};
