function sumItems(array) {

  let sum = 0;

  array.forEach(ele => {

    if (Number.isInteger(ele)) {
      sum += ele;
    }

    if (Array.isArray(ele)) {
      sum += sumItems(ele);
    }

  });

  return sum;

}

module.exports = sumItems;