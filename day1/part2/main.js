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
const numbersfile = fs.readFileSync('./input.txt', 'utf-8');
var firstColumn = [];
var secondColumn = [];
let x = 0;
for (const line of numbersfile.split(/[\r\n]+/)) {
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
var sortedFirstColumn = firstColumn.sort((a, b) => a - b);
var sortedSecondColumn = secondColumn.sort((a, b) => a - b);
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
    console.log(sortedFirstColumn[i] + ' similarity: ' + similarity);
}
console.log('sum');
console.log(sum);
