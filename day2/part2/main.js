"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const file = fs.readFileSync('./example.txt', 'utf-8');
let totalSafeReports = 0;
let dampenerUsed = 0;
for (const line of file.split(/[\r\n]+/)) {
    var report = line.report(/\d+/g);
    console.log(report);
}
// checkreport(report, dampenerUsed)
//   runReportIncreasing(report, dampenerUsed)
//   if failed, reverse report and run again 
//   runReportIncreasing(report.reverse, dampenerUsed)
//   if failed, return false
// runReportIncreasing(report, dampenerUsed)
//   for (let i = 0; i < report.length; i++) {
//   let a = report[i];
//   let b = report[i+1];
//   if (Math.abs(a - b) > 3) {
//     console.log('FAILED level differ! report: ' + a + ' - ' + b);
//     return false;
//   }
// } 
//     order = increasing or decreasing
//       if failed, rerun with dampenerUsed = true and reports - first/last elements 
//   checkLevelDiff(report, dampenerUsed, order)
//     compare a to b, is it +1 - +3
//       if failed, rerun with dampenerUsed = true and reports - a/b elements
//   if we get a pass, return true
// for each report, run checkReport(report, dampenerUsed)
function checkReport(report, dampenerUsed) {
    if (runReportIncreasing(report, dampenerUsed) || runReportIncreasing(report.reverse(), dampenerUsed)) {
        return true;
    }
    else {
        return false;
    }
}
function runReportIncreasing(report, dampenerUsed) {
    if (dampenerUsed > 1) {
        return false;
    }
    for (let i = 0; i < report.length; i++) {
        let a = report[i];
        let b = report[i + 1];
        // If they are too far apart, fail report
        if ((Math.abs(a - b) > 3) || (Math.abs(a - b) < 1)) {
            console.log('FAILED level differ! report: ' + report);
            // try again with dampener
            if (runReportIncreasing(report.splice(i, i), dampenerUsed + 1) || runReportIncreasing(report.splice(i, i), dampenerUsed + 1)) {
                return true;
            }
            return false;
        }
        // If we make it to the end, add safe report to total
        if (i === report.length - 2) {
            console.log('Safe report: ' + report);
            return true;
        }
    }
}
