import * as fs from 'fs';
const numbersfile = fs.readFileSync('./input.txt', 'utf-8');

var firstColumn: number[] = [];
var secondColumn: number[] = [];

let x = 0;

for (const line of numbersfile.split(/[\r\n]+/) ) {
  var match = line.match(/\d+/g);
  console.log(match);
  if (match) {
    firstColumn[x] = parseInt(match[0], 10);
    secondColumn[x] = parseInt(match[1], 10);
  }
  x++;
}

console.log('firstColumn');
console.log(firstColumn);

console.log('secondColumn');
console.log(secondColumn);

var sortedFirstColumn: number[] = firstColumn.sort((a, b) => a - b); 
var sortedSecondColumn: number[] = secondColumn.sort((a, b) => a - b); 

console.log('sortedFirstColumn');
console.log(sortedFirstColumn);

console.log('sortedSecondColumn');
console.log(sortedSecondColumn);

let similarity = 0;
let sum = 0;

for (let i = 0; i < sortedFirstColumn.length; i++) {
  let similarity = 0;
  for (let j = 0; j < sortedSecondColumn.length; j++) {
    if (sortedFirstColumn[i] === sortedSecondColumn[j]) {
      similarity++;
    }
  } 
  sum += sortedFirstColumn[i] * (similarity);
  console.log(sortedFirstColumn[i] +' similarity: ' + similarity);
}

console.log('sum');
console.log(sum);
