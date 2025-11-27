// BuzzFizz
// Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item in the array. A sequence is correct if:

// Numbers that are multiples of 3 are replaced with "Fizz"
// Numbers that are multiples of 5 are replaced with "Buzz"
// Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
// All other numbers remain as integers in ascending order, starting from 1.
// The array must start at 1 and have no missing or extra elements.

function isFizzBuzz(sequence) {
  console.log(sequence);
  // get the sequence.length
  const length = sequence.length;
  // console.log(length)
  const compare = fizzBuzz(length);
  console.log(compare);
  // loop through sequence to check if its the same as compare
  // for (let i = 0; i <= sequence.length - 1; i++) {
  //   console.log(sequence[i], compare[i]);
  // return (sequence[i] === compare[i])

  // if (sequence[i] === compare[i]) {
  //  console.log(sequence[i], compare[i])
  //  return true
  // } else {
  //  return false
  //}
  // }
  //return sequence;
  return JSON.stringify(sequence) === JSON.stringify(compare);
}

// lets write fizzbuzz again

function fizzBuzz(e) {
  const fbArray = [];
  for (let i = 1; i <= e; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fbArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      fbArray.push('Fizz');
    } else if (i % 5 === 0) {
      fbArray.push('Buzz');
    } else {
      fbArray.push(i);
    }
  }
  return fbArray;
}

// let array1 = [11, 22, 33];
// let array2 = [11, 22, 33];

// console.log(JSON.stringify(array1) === JSON.stringify(array2)); //true
