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
for (const line of file.split(/[\r\n]+/)) {
    var match = line.match(/\d+/g);
    console.log(match);
    if (match) {
        let currentReportSafe = true;
        let isIncreasing = false;
        let isDecreasing = false;
        while (currentReportSafe) {
            for (let i = 0; i < match.length; i++) {
                let a = parseInt(match[i], 10);
                let b = parseInt(match[i + 1], 10);
                // If they are too far apart, fail report
                if ((Math.abs(a - b) > 3) || (Math.abs(a - b) < 1)) {
                    console.log('FAILED level differ! report: ' + match);
                    currentReportSafe = false;
                    break;
                }
                if (i === 0) {
                    // console.log('First pair: ' + a + ' ' + b);
                    if (a > b) {
                        // First pair determines increasing or decreasing
                        console.log('First pair: ' + a + ' ' + b + ' is decreasing');
                        isDecreasing = true;
                        continue;
                    }
                    else if (a < b) {
                        console.log('First pair: ' + a + ' ' + b + ' is increasing');
                        isIncreasing = true;
                        continue;
                    }
                }
                if (a > b && isIncreasing) {
                    console.log('FAILED alternating pattern! report: ' + match);
                    currentReportSafe = false;
                    break;
                }
                else if (a < b && isDecreasing) {
                    console.log('FAILED alternating pattern! report: ' + match);
                    currentReportSafe = false;
                    break;
                }
                // If we make it to the end, add safe report to total
                if (i === match.length - 2) {
                    console.log('Safe report: ' + match);
                    totalSafeReports++;
                    currentReportSafe = false; // Break out of while loop
                    break;
                }
            }
        }
    }
}
console.log('Total safe reports: ' + totalSafeReports);