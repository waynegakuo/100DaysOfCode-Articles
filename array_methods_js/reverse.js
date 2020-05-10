// Reverse an array: first becomes last, last becomes first; changes the original array

const numbers = [1, 2, 3, 4, 5]
const numbers2 = [1, 2, 3, 4, 5]

const newNumbers = numbers.reverse(); // changes the array
console.log('Numbers array changed', numbers)
console.log('Reverse and changes original', newNumbers)

const newNumbers2 = numbers2.concat().reverse() // creates shallow copy of numbers but does not change the original array
// const newNumbers2 = [...numbers2].reverse() // using spread operator

console.log('Numbers2 array intact', numbers2)
console.log('Reverse without changing original', newNumbers2);

// Use case: if you want to reverse characters of a string
const str = 'Coding is fun!';

// Split the string in array of char providing an empty string, reverse 
// that array then use join method to join back the strings in the array ~ this method can be used to find a palindrome...Jackpot!
const res = str.split('').reverse().join('');

console.log(res);
// console.log(res.toLowerCase()); ~ for palindrome cases

//Checking for Palindrome
if(res.toLowerCase() === str.toLowerCase()){
    console.log('It is a palindrome')
  }
  else {
    console.log('No it is NOT a palindrome')
  }