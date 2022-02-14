const anthem = 'Amar Sonar Bangla Ami Tomai Valobashi';
const words = anthem.split('');
const withoutA = anthem.split('a');
const smallSlice = anthem.slice(5, 12);
//console.log(smallSlice);
//substr
const anotherPart = anthem.substr(11, 6);
console.log(anotherPart);
//substring
const subString = anthem.substring(11, 15);
console.log(subString);
//concat 
const first = 'Amader';
const second = 'City';
const fullString = first.concat(second).concat('comilla');
console.log(fullString);
//join
const letter = ['a', 'm', 'a', 'r']
const joined = letter.join('');
console.log(joined);
