function getIncrementer(incrementBy) {
  return function increment(incrementThis) {
    return incrementThis + incrementBy;
  }
}

const incrementBy1 = getIncrementer(1);
const incrementBy10 = getIncrementer(10);

console.log(incrementBy1(1000)); // increment 1000 by 1
console.log(incrementBy10(1000)); // increment 1000 by 10
console.log(getIncrementer(100)(1000)); // increment 1000 by 100

