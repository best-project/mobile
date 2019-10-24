// randomize elements of arra
export const shuffleArray = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

// add random indexes to answers list
export const mixDifferentAnswersIndexes = (maxValue, without, amount) => {
  let array = [];
  for (let i = 0; i < amount - 1; i++) {
    let item = Math.floor(Math.random() * maxValue);
    while (array.includes(item) || item === without) {
      item = Math.floor(Math.random() * maxValue);
    }
    array.push(item);
  }
  array.push(without);

  array = shuffleArray(array);
  return array;
};
