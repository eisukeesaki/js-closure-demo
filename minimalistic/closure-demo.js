function getIncrementer(incrementBy) {
  return function increment(incrementThis) {
    return incrementThis + incrementBy;
  }
}

const incrementBy1 = getIncrementer(1);
const incrementBy10 = getIncrementer(10);

console.log(incrementBy1(0));         // increment 0 by 1
console.log(incrementBy10(0));        // increment 0 by 10
console.log(getIncrementer(0)(1000)); // increment 0 by 100

