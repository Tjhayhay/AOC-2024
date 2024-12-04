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

let sum = 0;

for (let i = 0; i < sortedFirstColumn.length; i++) {
  console.log('sortedFirstColumn['+i+']: ' + sortedFirstColumn[i] + ' - ' + 'sortedSecondColumn['+i+']: ' + sortedSecondColumn[i]);
  sum += Math.abs(sortedFirstColumn[i] - sortedSecondColumn[i]);
}

console.log('sum');
console.log(sum);
