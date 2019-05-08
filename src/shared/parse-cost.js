const parseCost = cost => {
  let [dollars, cents] = `${cost.toFixed(2)}`.split('.');
  dollars = reverseString(dollars)
    .match(/.{1,3}/g)
    .reverse()
    .map(digits => reverseString(digits))
    .join(',');
  return `$${dollars}.${cents}`;
};

const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');

export default parseCost;
