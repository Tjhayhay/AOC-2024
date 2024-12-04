import * as fs from 'fs';
const file = fs.readFileSync('./day2/part2/input.txt', 'utf-8');

let totalSafeReports = 0

// read each line in file as a report and run checkReport on it
for (const line of file.split(/[\r\n]+/) ) {
  var match = line.match(/\d+/g);
  let dampenerUsed = 0;
  var report: number[] = [];
  if (match) {
      for (let i = 0; i < match.length; i++) {
        report[i] = parseInt(match[i], 10);
      }
    console.log('');
    console.log('report: ' + report);
    if (checkReport(report, dampenerUsed)) {
      // console.log('safe report: ' + report);
      totalSafeReports++;
    }
  }
}

console.log('');
console.log('totalSafeReports: ' + totalSafeReports);


function checkReport(report: number[], dampenerUsed: number): boolean {
  let reversedReport: number[] = [...report].reverse();
  if (runReportIncreasing(report, dampenerUsed)) {
    console.log('Safe report increasing: ' + report);
    return true;
  } else if (runReportIncreasing(reversedReport, dampenerUsed)) {
    console.log('Safe report decreasing: ' + reversedReport);
    return true;
  } else {
    console.log('Unsafe report: ' + report);
    return false;
  }
}

function runReportIncreasing(report: number[], dampenerUsed: number): boolean {
  console.log('inside runReportIncreasing report: ' + report + ' dampenerUsed: ' + dampenerUsed);
  for (let i = 0; i < report.length - 1; i++) {

    let a = report[i];
    let b = report[i+1];

    // If they are too far apart, fail report
    if (((a - b) > 3) || ((a - b) < 1)) {
      // console.log('FAILED level differ! either a:' + a + ' b:' + b + ' dampenerUsed: ' + (dampenerUsed+1));

      // try again with dampener
      let removeAReport: number[] = report.slice(0, i).concat(report.slice(i + 1));
      let removeBReport: number[] = report.slice(0, i + 1).concat(report.slice(i + 2));
      

      console.log('trying again with report a: ' + removeAReport + ' dampenerUsed: ' + (dampenerUsed + 1));
      if ((dampenerUsed < 1) && runReportIncreasing(removeAReport, dampenerUsed + 1)) {
        console.log('Safe reportA: ' + removeAReport);
        return true;
      } 
      console.log('trying again with report b: ' + removeBReport + ' dampenerUsed: ' + (dampenerUsed + 1));
      if ((dampenerUsed < 1) && runReportIncreasing(removeBReport, dampenerUsed + 1)) {
        console.log('Safe reportB: ' + removeBReport);
        return true;
      } 
      // console.log('FAILED level differ!');
      return false;
    }

    // If we make it to the end, add safe report to total
    if (i === report.length - 2) {
      // console.log('Safe report: ' + report);
      return true;
    }
  }
  // console.log('FAILED at the end!');
  return false;
}

