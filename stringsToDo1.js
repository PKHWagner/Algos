// Remove Blanks

function removeBlanks(string) {
  return string.replace(/\s/g, '');
}

let string2 = "I can not BELIEVE it's not BUTTER";
let result2 = removeBlanks(string2);
console.log(result2);


// Get Digits

function getDigits(string) {
  let digits = "";
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    
    if (!isNaN(Number(char))) {
      digits += char;
    }
  }
  
  return Number(digits);
}

let string3 = "0s1a3y5w7h9a2t4?6!8?0";
let result3 = getDigits(string3);
console.log(result3);


// Acronyms

function acronym(string) {
  let words = string.split(' ');
  let acronym = '';
  
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    if (word.length > 0) {
      acronym += word[0].toUpperCase();
    }
  }
  
  return acronym;
}

let string4 = "Live from New York, it's Saturday Night!";
let result4 = acronym(string4);
console.log(result4);


// Count Non-Spaces

function countNonSpaces(string) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      count++;
    }
  }
  
  return count;
}

let string5 = "Hello world !";
let result5 = countNonSpaces(string5);
console.log(result5);


// Remove Shorter Strings

function removeShorterStrings(strings, minLength) {
  return strings.filter(function(string) {
    return string.length >= minLength;
  });
}

let array2 = ['There', 'is', 'a', 'bug', 'in', 'the', 'system'];
let result6 = removeShorterStrings(array2, 3);
console.log(result6);