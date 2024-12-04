import * as fs from 'fs';
const file = fs.readFileSync('./example.txt', 'utf-8');

let totalSafeReports = 0;

function arraysEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) return false;

  return arr1.every((val, index) => val === arr2[index]);
}

for (const line of file.split(/[\r\n]+/)) {
  const match = line.match(/\d+/g);
  const report: number[] = [];
  
  if (match) {
    let currentReportSafe = true;
    let reportMarkedAsUnsafe = false;
    let isIncreasing = false;
    let isDecreasing = false;

    for (let i = 0; i < match.length; i++) {
      report[i] = parseInt(match[i], 10);
    }

    const sortedReportAsc = [...report].sort((a, b) => a - b);
    const sortedReportDesc = [...report].sort((a, b) => b - a);

    console.log(report);
    if (arraysEqual(report, sortedReportAsc)) {
      console.log(sortedReportAsc);
      console.log('increasing');
    } else if (arraysEqual(report, sortedReportDesc)) {
      console.log(sortedReportDesc);
      console.log('decreasing');
    } else {
      console.log('no match');
      reportMarkedAsUnsafe = true;
    }


  }
}