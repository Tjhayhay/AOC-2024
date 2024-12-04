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
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    return arr1.every((val, index) => val === arr2[index]);
}
for (const line of file.split(/[\r\n]+/)) {
    const match = line.match(/\d+/g);
    const report = [];
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
        }
        else if (arraysEqual(report, sortedReportDesc)) {
            console.log(sortedReportDesc);
            console.log('decreasing');
        }
        else {
            console.log('no match');
            reportMarkedAsUnsafe = true;
        }
    }
}
